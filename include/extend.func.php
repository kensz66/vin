<?php
function litimgurls($imgid = 0)
{
    global $lit_imglist, $dsql;
    //获取附加表
    $row = $dsql->GetOne("SELECT c.addtable FROM #@__archives AS a LEFT JOIN #@__channeltype AS c 
                                                            ON a.channel=c.id where a.id='$imgid'");
    $addtable = trim($row['addtable']);

    //获取图片附加表imgurls字段内容进行处理
    $row = $dsql->GetOne("Select imgurls From `$addtable` where aid='$imgid'");

    //调用inc_channel_unit.php中ChannelUnit类
    $ChannelUnit = new ChannelUnit(2, $imgid);

    //调用ChannelUnit类中GetlitImgLinks方法处理缩略图
    $lit_imglist = $ChannelUnit->GetlitImgLinks($row['imgurls']);

    //返回结果
    return $lit_imglist;
}


/**
 *  文章内容提取图片(多张)自定义输出
 *
 * @access    public
 * @param     string  $htmls  	文档内容
 * @param     string  $num  	输出几张   $num <= 0,输出全部图片
 * @return    string
 */

class KenHelpers
{
    private static $picsUrl;
    private static $picsHtml;
    private static $htmls;      //记录外部传入的参数；
    public static $i = 0;
    protected function __construct()
    {
    }
    protected function __clone()
    {
    }


    public static function get_picsUrl($htmls)
    {
        preg_match_all("/src=('|\")([^'\"]+)('|\")/", $htmls, $matches);
        $imgsrc_arr = array_unique($matches[0]);
        // echo ++self::$i.'<br>';
        self::$picsUrl = $imgsrc_arr;
        return self::$picsUrl;
    }

    public static function get_picsHtml($htmls, $num = 0)
    {

        // 如果传入的代码为空，则直接返回空值
        if (empty($htmls)) return null;

        // 如果传入的代码与前面相同，直接返回已经计算的结果
        if ($htmls === self::$htmls) return self::$picsHtml;

        // 更新变量存储，用于下次判断
        self::$htmls = $htmls;

        $imgsrc_arr = self::get_picsUrl($htmls);
        //小图html
        $x = '<div class="swiper-slide gallery-thumbs-item">
        <a href="javascript:void(0)"><img ';
        $y = ' alt="缩略图';
        $z = '"></a>
        </div>';
        //大图html
        $a = '<div class="swiper-slide gallery-item">
        <a href="javascript:void(0)" data-bs-toggle="modal"  data-bs-target="#big-pic-modal';
        $b = '"><img ';
        $c = 'alt="图';
        $d = '"></a>
        </div>
        ';

        //madal html
        $s1 = '<div class="modal fade" id="big-pic-modal';
        $s2 = '">
        <div class="modal-dialog modal-dialog-centered product-modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body text-center">
        <img class="align-middle" ';
        $s3 = 'alt="图';
        $s4 = '">
        </div>
        <div class="modal-footer">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#big-pic-modal';
        $s5 = '" data-bs-dismiss="modal">下一张</button>
        </div>
        </div>
        </div>
        </div>';

        $result = []; // 用数组存储组合结果

        $count = count($imgsrc_arr) - 1;
        foreach ($imgsrc_arr as $i => $imgsrc) {

            if ($num > 0 && $i == $num) break;
            //小图
            $result[0] .= $x . $imgsrc . $y . $i . $z;
            //大图
            $result[1] .= $a . $i . $b . $imgsrc . $c . $i . $d;
            //modal
            $i < $count ?
                $result[2] .= $s1 . $i . $s2 .  $imgsrc . $s3 . $i . $s4 . ($i + 1) . $s5 :
                $result[2] .= $s1 . $i . $s2 .  $imgsrc . $s3 . $i . $s4 . '0' . $s5;
        }
        self::$picsHtml = $result;

        // var_dump($result);
        return self::$picsHtml;
    }
}


function get_pics_code($htmls, $num, $size)
{
    $pics_code = KenHelpers::get_picsHtml($htmls, $num);
    return $size === 'lit' ? $pics_code[0] : $pics_code[1];
}
function get_modal_pics_code($htmls, $num)
{
    return  KenHelpers::get_picsHtml($htmls, $num)[2];
}
