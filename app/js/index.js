$(document).ready(function() {
    
        //Hidden Input field
        let hiddenInput;
    
        //hide buttons
        $('button.btn-danger, button.btn-success').attr("hidden", true);
    
        //set Eventlistiner to the list item
        $('li').click(function() {
            this.contentEditable = true;
            let selfId = this.attributes.name.value;
            let self = this;
    
            //display hidden buttons
            $.each($('.' + selfId), (index,item)=>{
                $(item).attr("hidden", false);
                //console.log(item);
            }
            );
            //set hook to hiddenInput
            hiddenInput = $($('li[name=' + selfId + ']')[0]).siblings('input[name=quote]')[0];
    
            //Set event listener to paragraph
            $(self).on('keyup', function test() {
                //console.log('keydown');
                hiddenInput.value = $(self).text();
                console.log(hiddenInput.value);
    
            });
        });
    
    });
    