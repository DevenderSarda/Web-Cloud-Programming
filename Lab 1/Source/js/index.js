/**
 * Created by deven on 9/8/2017.
 */
$( document ).ready(function() {
    $('.dropdown-menu').on( 'click', 'a', function(event) {
        var text = $(this).html();
        var htmlText = text + ' <span class="caret"></span>';
        $(this).closest('.dropdown').find('.dropdown-toggle').html(htmlText);
        if(this.parentElement.parentElement.id === 'ul_subcategories'){
            $('#pnl_item').show();
            $('#image_container').html('');
            $('#item_description').html('');
            switch(this.text) {
                case 'Jeans':
                    $('#image_container').append('<span>Jeans</span><img class="img_item" style="cursor: pointer" src="./images/jeans.png" alt="Jeans" height="200" width="175">');
                    $('#item_description').append('<span>Jeans are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Women':
                    $('#image_container').append('<span>Women</span><img class="img_item" style="cursor: pointer" src="./images/women.png" alt="Women" height="200" width="175">');
                    $('#item_description').append('<span>Women wear are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Shorts':
                    $('#image_container').append('<span>Shorts</span><img class="img_item" style="cursor: pointer" src="./images/short.png" alt="Short" height="200" width="175">');
                    $('#item_description').append('<span>Short wear are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'iPad':
                    $('#image_container').append('<span>iPad</span><img class="img_item" style="cursor: pointer" src="./images/ipad.png" alt="ipad" height="200" width="175">');
                    $('#item_description').append('<span>iPad are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Kindle':
                    $('#image_container').append('<span>Kindle</span><img class="img_item" style="cursor: pointer" src="./images/kindle.png" alt="kindle" height="200" width="175">');
                    $('#item_description').append('<span>Kindle are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'HeadPhones':
                    $('#image_container').append('<span>HeadPhones</span><img class="img_item" style="cursor: pointer" src="./images/headphone.png" alt="Head Phones" height="200" width="175">');
                    $('#item_description').append('<span>Head Phones are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Laptop':
                    $('#image_container').append('<span>Laptop</span><img class="img_item" style="cursor: pointer" src="./images/laptop.png" alt="Laptop" height="200" width="175">');
                    $('#item_description').append('<span>Laptop are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Bed':
                    $('#image_container').append('<span>Bed</span><img class="img_item" style="cursor: pointer" src="./images/bed.png" alt="Bed" height="200" width="175">');
                    $('#item_description').append('<span>Bed are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Comforter':
                    $('#image_container').append('<span>Comforter</span><img class="img_item" style="cursor: pointer" src="./images/comforter.png" alt="Comforter" height="200" width="175">');
                    $('#item_description').append('<span>Comforter are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Dinning Table':
                    $('#image_container').append('<span>Dinning Table</span><img class="img_item" style="cursor: pointer" src="./images/dinningtable.png" alt="Dinning Table" height="200" width="175">');
                    $('#item_description').append('<span>Dinning Table are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Sofa':
                    $('#image_container').append('<span>Sofa</span><img class="img_item" style="cursor: pointer" src="./images/sofa.png" alt="Sofa" height="200" width="175">');
                    $('#item_description').append('<span>Sofa are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Bed Lamp':
                    $('#image_container').append('<span>Bed Lamp</span><img class="img_item" style="cursor: pointer" src="./images/bedlamp.png" alt="Bed Lamp" height="200" width="175">');
                    $('#item_description').append('<span>Bed Lamp are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Training Shoes':
                    $('#image_container').append('<span>Training Shoes</span><img class="img_item" style="cursor: pointer" src="./images/shoes.png" alt="Shoes" height="200" width="175">');
                    $('#item_description').append('<span>Shoes are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Gym Wear':
                    $('#image_container').append('<span>Gym Wear</span><img class="img_item" style="cursor: pointer" src="./images/gymwear.png" alt="Gym Wear" height="200" width="175">');
                    $('#item_description').append('<span>Gym Wear are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Gloves':
                    $('#image_container').append('<span>Gloves</span><img class="img_item" style="cursor: pointer" src="./images/gloves.png" alt="Gloves" height="200" width="175">');
                    $('#item_description').append('<span>Gloves are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;
                case 'Golf Cap':
                    $('#image_container').append('<span>Golf Cap</span><img class="img_item" style="cursor: pointer" src="./images/cap.png" alt="Short" height="200" width="175">');
                    $('#item_description').append('<span>Gold Cap are a type of pants, typically made from denim or dungaree cloth. ... Prior to the Levi Strauss patented trousers, the term "blue jeans" had been long in use for various garments (including trousers, overalls, and coats), constructed from blue colored denim.</span>')
                    break;

                default:
                    //code block
            }
        }
    });


    $("#proceed").click(function () {
        $('#pnl_subcategory').show();
        $('#ul_subcategories').html('');
        if($('#ddl_category').text().replace(/ /g,'') === 'Clothing')
                $('#ul_subcategories').append('<li><a href="#">Jeans</a></li><li><a href="#">Women</a></li><li><a href="#">Shorts</a></li>');
        else if($('#ddl_category').text().replace(/ /g,'') === 'Electronics')
            $('#ul_subcategories').append('<li><a href="#">iPad</a></li><li><a href="#">Kindle</a></li><li><a href="#">HeadPhones</a></li><li><a href="#">Laptop</a></li>');
        else if($('#ddl_category').text().replace(/ /g,'') === 'Home')
            $('#ul_subcategories').append('<li><a href="#">Bed</a></li><li><a href="#">Comforter</a></li><li><a href="#">Dinning Table</a></li><li><a href="#">Sofa</a></li><li><a href="#">Bed Lamp</a></li>');
        else if($('#ddl_category').text().replace(/ /g,'') === 'Sports')
            $('#ul_subcategories').append('<li><a href="#">Training Shoes</a></li><li><a href="#">Gym Wear</a></li><li><a href="#">Gloves</a></li><li><a href="#">Golf Cap</a></li>');
    });

   // function imageClick(){
     // alert('Success');
    //};

    //$('.img_item').click(function () {
      //      alert('Success');
    //});

    //$( "img.img_item" ).live( "click", function() {
      //  alert('success');
    //});

    $('#image_container').on('click', '.img_item', function() {
        localStorage.removeItem("order");
        localStorage.setItem('order', this.parentElement.innerText);
        window.location = 'http://localhost:63342/Source/order.html?_ijt=84s874alaj2jf34uev93l26okd#';
    });

});