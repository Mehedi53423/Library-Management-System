
//Check if the validation of the form before changing tab
function validTabInfo(wizard_form, validate_definition){
    if( !(wizard_form.valid()) ) {
        validate_definition.focusInvalid();
        return false;
    }
    return true;
}

//What to do when click one of the tabs
function onTabClick(clickedIndex, actualIndex,$this ){
    //clicked next tab
    if ( clickedIndex == actualIndex + 1 ) {
        return $this.onNext();
        //clicked tabs after next tab
    } else if ( clickedIndex > actualIndex + 1 ) {
        return false;
        // clicked previous tabs
    } else {
        return true;
    }
}

//Check if we are in the last tab
function inLastTab(actualIndex, totalTabs, submitBtn){

    if( actualIndex != totalTabs-1 ){
        submitBtn.addClass('hidden');
    }else{
        submitBtn.removeClass('hidden');
    }
}
//Mark the tabs that have been completed
function updateValidateTabs(activeTab){
    activeTab.prevAll().addClass('validated');
    activeTab.nextAll().removeClass('validated');
}

//Create the validation of the form
function buildValidation(wizardForm){

    return wizardForm.validate({

        highlight: function(label) {
            $(label).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function(label) {
            $(label).closest('.form-group').removeClass('has-error');
            label.remove();
        },

        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 8
            },
            username: {
                required: true,
                minlength: 2,
                maxlength: 8
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 4,
                maxlength: 10
            },
            age: {
                required: true,
                number: true,
                range: [18, 100]
            },
            terms:{
                required: true
            }
        }
    });
}

//Triger a Success notification when submit the form
function successNotification(){
    toastr.success('Awesome!', '<h5 style="margin-top: 0px; margin-bottom: 5px;"><b>You completed the form!</b></h5>');
}


$(function(){

    //WIZARD 01
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Wizard form
    var w1_form = $('#wizard-1')
    //Submit form button
    var w1_submit = $('#wizard-1 .tab-buttons .finish');
    //Validate
    var w1_validate = buildValidation(w1_form);

     w1_form.bootstrapWizard({
        tabClass: 'steps',
        nextSelector: '.tab-buttons .next',
        previousSelector: '.tab-buttons .previous',

        onInit: function(activeTab, navigation){
            this.totalTabs =  navigation.children('li').length;
        },
        onNext: function() {
            return validTabInfo(w1_form,w1_validate);
        },
        onTabClick: function( activeTab, navigation, actualIndex, clickedIndex ) {
            return onTabClick(clickedIndex, actualIndex, this);
        },
        onTabChange: function( activeTab, navigation, previousIndex, actualIndex ) {
            inLastTab(actualIndex, this.totalTabs, w1_submit);
        },
         onTabShow: function( activeTab, navigation, actualIndex ) {
             updateValidateTabs(activeTab);
         }
    });

    //On Submit
    w1_submit.on('click', function( event ) {
        event.preventDefault();
        if ( w1_form.valid() ) {
            successNotification();
            w1_form[0].reset();
            w1_form.bootstrapWizard('first');
        }
    });

    //WIZARD 02
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Wizard form
    var w2_form = $('#wizard-2')
    //Submit form button
    var w2_submit = $('#wizard-2 .tab-buttons .finish');
    //Validate
    var w2_validate = buildValidation(w2_form);

     w2_form.bootstrapWizard({
        tabClass: 'steps',
        nextSelector: '.tab-buttons .next',
        previousSelector: '.tab-buttons .previous',

        onInit: function(activeTab, navigation){
            this.totalTabs =  navigation.children('li').length;
        },
        onNext: function() {
            //return validTabInfo(w2_form,w2_validate);
            return true;
        },
        onTabClick: function( activeTab, navigation, actualIndex, clickedIndex ) {
            return onTabClick(clickedIndex, actualIndex, this);
        },
        onTabChange: function( activeTab, navigation, previousIndex, actualIndex ) {
            inLastTab(actualIndex, this.totalTabs, w2_submit);
        },
         onTabShow: function( activeTab, navigation, actualIndex ) {
             updateValidateTabs(activeTab);
         }
    });

    //On Submit
    w2_submit.on('click', function( event ) {
        event.preventDefault();
        //if ( w2_form.valid() ) {
            successNotification();
            w2_form[0].reset();
            w2_form.bootstrapWizard('first');
        //}
    });

    //WIZARD 03
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Wizard form
    var w3_form = $('#wizard-3')
    //Submit form button
    var w3_submit = $('#wizard-3 .tab-buttons .finish');
    //Validate
    var w3_validate = buildValidation(w3_form);

     w3_form.bootstrapWizard({
        tabClass: 'steps',
        nextSelector: '.tab-buttons .next',
        previousSelector: '.tab-buttons .previous',

        onInit: function(activeTab, navigation){
            this.totalTabs =  navigation.children('li').length;
        },
        onNext: function() {
            //return validTabInfo(w3_form,w3_validate)
            return true;
        },
        onTabClick: function( activeTab, navigation, actualIndex, clickedIndex ) {
            return onTabClick(clickedIndex, actualIndex, this);
        },
        onTabChange: function( activeTab, navigation, previousIndex, actualIndex ) {
            inLastTab(actualIndex, this.totalTabs, w3_submit);
        },
         onTabShow: function( activeTab, navigation, actualIndex ) {
             updateValidateTabs(activeTab);
         }
    });

    //On Submit
    w3_submit.on('click', function( event ) {
        event.preventDefault();
        //if ( w3_form.valid() ) {
            successNotification();
            w3_form[0].reset();
            w3_form.bootstrapWizard('first');
        //}
    });

    //WIZARD 04
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Wizard form
    var w4_form = $('#wizard-4')
    //Submit form button
    var w4_submit = $('#wizard-4 .tab-buttons .finish');
    //Validate
    var w4_validate = buildValidation(w4_form);

     w4_form.bootstrapWizard({
        tabClass: 'steps',
        nextSelector: '.tab-buttons .next',
        previousSelector: '.tab-buttons .previous',

        onInit: function(activeTab, navigation){
            this.totalTabs =  navigation.children('li').length;
        },
        onNext: function() {
            //return validTabInfo(w4_form,w4_validate);
            return true;
        },
        onTabClick: function( activeTab, navigation, actualIndex, clickedIndex ) {
            return onTabClick(clickedIndex, actualIndex, this);
        },
        onTabChange: function( activeTab, navigation, previousIndex, actualIndex ) {
            inLastTab(actualIndex, this.totalTabs, w4_submit);
        },
         onTabShow: function( activeTab, navigation, actualIndex ) {
             updateValidateTabs(activeTab);
         }
         
     });

    //On Submit
    w4_submit.on('click', function( event ) {
        event.preventDefault();
        //if ( w4_form.valid() ) {
            successNotification();
            w4_form[0].reset();
            w4_form.bootstrapWizard('first');
        //}
    });


    //WIZARD 05
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Wizard form
    var w5_form = $('#wizard-5')
    //Submit form button
    var w5_submit = $('#wizard-5 .tab-buttons .finish');
    //Validate
    var w5_validate = buildValidation(w5_form);

     w5_form.bootstrapWizard({
        tabClass: 'steps',
        nextSelector: '.tab-buttons .next',
        previousSelector: '.tab-buttons .previous',

        onInit: function(activeTab, navigation){
            this.totalTabs =  navigation.children('li').length;
        },
        onNext: function() {
            //return validTabInfo(w5_form,w5_validate);
            return true;
        },
        onTabClick: function( activeTab, navigation, actualIndex, clickedIndex ) {
            return onTabClick(clickedIndex, actualIndex, this);
        },
        onTabChange: function( activeTab, navigation, previousIndex, actualIndex ) {
            inLastTab(actualIndex, this.totalTabs, w5_submit);
        },
         onTabShow: function( activeTab, navigation, actualIndex ) {
             updateValidateTabs(activeTab);
         }

     });

    //On Submit
    w5_submit.on('click', function( event ) {
        event.preventDefault();
        //if ( w5_form.valid() ) {
            successNotification();
            w5_form[0].reset();
            w5_form.bootstrapWizard('first');
        //}
    });



})