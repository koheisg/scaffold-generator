function Command() {
    this.rails = 'bin/rails';
    this.method = 'g';
    this.generateType = function() {
        return $('#argument option:selected').val();
    }
    this.createModelName = function() {
        return $('#model_name').val();
    }
    this.createArgument = function() {
        var name = $('#name').val();
        var type = $('#type').val();
        return name + ':' + type;
    }
    this.create = function() {
        return this.rails + ' ' + this.method + ' ' + this.createModelName() + ' ' + this.generateType() + ' ' + this.createArgument();
    }
}


function appendForm() {
    var template = $("#greeting-template").text();
    $("#field").append(_.template(template));
}

function writeText() {
    var command = new Command();
    $('#result').val(command.create());
}

$('#argument, #model_name, #type, #name').on('change', function(){
    writeText();
});

(function () {
    appendForm();
    writeText();
}())

$(document).on('click', '.plus', function(){
    appendForm();
});
