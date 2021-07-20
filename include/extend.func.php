<?php
function litimgurls($imgid=0)
{
    global $lit_imglist,$dsql;
    //获取附加表
    $row = $dsql->GetOne("SELECT c.addtable FROM #@__archives AS a LEFT JOIN #@__channeltype AS c 
                                                            ON a.channel=c.id where a.id='$imgid'");
    $addtable = trim($row['addtable']);
    
    //获取图片附加表imgurls字段内容进行处理
    $row = $dsql->GetOne("Select imgurls From `$addtable` where aid='$imgid'");
    
    //调用inc_channel_unit.php中ChannelUnit类
    $ChannelUnit = new ChannelUnit(2,$imgid);
    
    //调用ChannelUnit类中GetlitImgLinks方法处理缩略图
    $lit_imglist = $ChannelUnit->GetlitImgLinks($row['imgurls']);
    
    //返回结果
    return $lit_imglist;
}


/**
 *  文章内容提取图片(多张)自定义输出
 *
 * @access    public
 * @param     string  $string  	文档内容
 * @param     string  $num  	输出几张
 * @return    string
 */


//获取原始数据
if (!function_exists('get_html_pics')) {
    function get_html_pics($string, $num)
    {
        preg_match_all("/src=('|\")([^'\"]+)('|\")/", $string, $matches);
        $imgsrc_arr = array_unique($matches[0]);
        return $imgsrc_arr;
    }
}

// 获取小图：根据要求对数据进行处理：如果$num<=0，则输出所有图片，如果$num>0，则输出$num张图片
if (!function_exists('get_html_lit_pics')) {
    function get_html_lit_pics($string, $num)
    {
        $imgsrc_arr = get_html_pics($string, $num);
        $result = '';
        $start = '<div class="swiper-slide gallery-thumbs-item"><a href="#"><img ';
        $end = '></a></div>';
        // $count = count($imgsrc_arr);
        if ($num <= 0) {
            foreach ($imgsrc_arr as $i => $imgsrc) {
                $result .= $start . $imgsrc . $end . '
            ';
            }
            return $result;
        } else {
            foreach ($imgsrc_arr as $i => $imgsrc) {
                if ($i == $num) break;
                $result .= $start . $imgsrc . $end . '
            ';
            }
            return $result;
        }
    }
}

// 获取大图：根据要求对数据进行处理：如果$num<=0，则输出所有图片，如果$num>0，则输出$num张图片
if (!function_exists('get_html_big_pics')) {
    function get_html_big_pics($string, $num)
    {
        $imgsrc_arr = get_html_pics($string, $num);
        $result = '';
        $start_1 = '<div class="swiper-slide gallery-item"><a href="#" data-bs-toggle="modal"
                data-bs-target="#big-pic-modal';
        $start_2 = '"><img ';
        $end_1 = 'alt="';
        $end_2 = '"></a></div>';
        $end_3 = <<<EOT
EOT;
        // $count = count($imgsrc_arr);
        if ($num <= 0) {
            foreach ($imgsrc_arr as $i => $imgsrc) {
                $result .= $start_1 . $i . $start_2 . $imgsrc . $end_1 . $i . $end_2;
            }
            return $result;
        } else {
            foreach ($imgsrc_arr as $i => $imgsrc) {
                if ($i == $num) break;
                $result .= $start_1 . $i . $start_2 . $imgsrc . $end_1 . $i . $end_2;
            }
            return $result;
        }
    }
}

//获取大图片 modal 内容弹出框
if (!function_exists('get_html_modal_pics')) {
    function get_html_modal_pics($string, $num)
    {
        $imgsrc_arr = get_html_pics($string, $num);
        $result = '';
        $start_1 = '<div class="modal fade" id="big-pic-modal';
        $start_2 = '">
        <div class="modal-dialog modal-dialog-centered product-modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center">
            <img class="align-middle"  ';
        $end_1 = 'alt="';
        $end_2 = '">
             </div>
             <div class="modal-footer">
               <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#big-pic-modal';
        $end_3 = <<<EOT
" data-bs-dismiss="modal">下一张</button>
             </div>
          </div>
        </div>
      </div>
EOT;
        $count = count($imgsrc_arr);
        if ($num <= 0) {
            foreach ($imgsrc_arr as $i => $imgsrc) {
                if ($i < $count - 1) {
                    $j = $i + 1;
                    $result .= $start_1 . $i . $start_2 .  $imgsrc . $end_1 . $i . $end_2 . $j . $end_3;
                } else {
                    $result .= $start_1 . $i . $start_2 .  $imgsrc . $end_1 . $i . $end_2 . '0' . $end_3;
                }
            }
            return $result;
        } else {
            foreach ($imgsrc_arr as $i => $imgsrc) {
                if ($i == $num) break;
                $result .= $start_1 . $i . $start_2 .  $imgsrc . $end_1 . $i . $end_2;
            }
            return $result;
        }
    }
}