$(document).ready(init);

function init() {
  $("#slider").slider({
    range: "min",
    value: 3,
    min: 1,
    max: 99,
    //this gets a live reading of the value and prints it on the page
    slide: function(event, ui) {
      $("#contenidoSlider").text(ui.value + ' años');
    },
  });

  $("#datepicker").datepicker({
    firstDay: 1,
    closeText: 'Cerrar',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  });

  $("#infoIcon").click(function () {
    $("#dialogInfo").dialog("open");
  });

  $("#dialogInfo").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
}
