<div class="shop-product-tab section-mb">
            <div class="container">
                <h3 class="fs-5 fw-bold"><a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a>
                </h3>
                <div class="tab-content border-top border-top-1 p-5 " id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel">
                        <div class="row grid-view mb-n7">
                            {dede:arclist row='8' titlelen='48' orderby='click'}
                            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                                <!-- product-card start -->
                                <div class="product-card">
                                    <span class="badge bg-success product-badge"></span>
                                    <div class="product-thumb-nail">
                                         <a href='[field:arcurl /]' title="[field:title function='htmlspecialchars(@me)'/] "><img src='[field:litpic/]' alt="[field:title function='htmlspecialchars(@me)'/] "></a>
                                        <!-- <ul class="actions">
                                            <li class="action quick-view">
                                                <button data-bs-toggle="modal" data-bs-target="#product-modal"><i
                                                        class="las la-eye"></i></button>
                                            </li>
                                        </ul> -->
                                    </div>
                                    <div class="product-content">
                                        <h3 class="product-title fw-normal text-center">[field:textlink/]</h3>
                                        <div class="product-price-wrapp">
                                        </div>
                                    </div>
                                </div>
                                <!-- product-card end -->
                            </div>
                            {/dede:arclist}
                        </div>
                    </div>
    
                </div>
            </div>
        </div>