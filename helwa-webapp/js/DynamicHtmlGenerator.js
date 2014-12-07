var DynamicHtmlGenerator = (function () {



    // 
    // Template Code For Reference
    // 
    // var myPrivateVar, myPrivateMethod;
    //
    // // A private counter variable
    // myPrivateVar = 0;
    //
    // // A private function which logs any arguments
    // myPrivateMethod = function( foo ) {
    //     console.log( foo );
    // };

    return {

        RepopulateIngredientsList: function( ingredients ) {

            // TODO: Use document.writes / templates to populate 
            //       a list of ingredients on the webpage

            $("#ingredientTemplate").tmpl(ingredients).appendTo("#ingredients_placement");

            console.log(ingredients)
            for (i in ingredients) {
                $('#'+ingredients[i]['id']).popover({
                    placement : 'bottom',
                    content : '<tr>
                                
                                <td>
                                    <a href="#">Test</a>
                                </td>
                                <td>
                                    <a href="#">Test</a>
                                </td>
                            </tr>'
                });
            }
        }, 


        RepopulateDirectionsList: function( directions ) {

            // TODO: Use document.writes / templates to populate 
            //       a list of directions on the webpage

        }


        // 
        //  Template Code For Reference
        //        
        // // A public variable
        // myPublicVar: "foo",
        //
        // // A public function utilizing privates
        // myPublicFunction: function( bar ) {
        //
        //   // Increment our private counter
        //   myPrivateVar++;
        //
        //   // Call our private method using bar
        //   myPrivateMethod( bar );
        // }
    };

})();