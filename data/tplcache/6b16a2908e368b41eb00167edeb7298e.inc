<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                  <!-- product-card start -->
                  <div class="product-card">
                    <!-- <span class="badge bg-success product-badge">new</span> -->
                    <div class="product-thumb-nail">
                      [field:array runphp='yes']
                      @me = (empty(@me['litpic']) ? "" : "<a href='{@me[' arcurl']}'><img
                          class='product-image rounded-top rounded-5' src='{@me[' litpic']}' alt='{@me['
                          title']}' /></a>");
                      [/field:array]
                      <ul class="actions">
                        <li class="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i
                              class="las la-eye"></i></button>
                        </li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <h3 class="product-title fw-normal text-center text-truncate"><a
                          href="[field:arcurl/]">[field:title/]</a>
                      </h3>
                    </div>
                  </div>
                  <!-- product-card end -->
                </div>