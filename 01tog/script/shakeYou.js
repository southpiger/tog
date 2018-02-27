jQuery.fn.shake = function (intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, intDuration /*Time duration*/) {
    this.each(function () {
        var jqNode = $(this);
//      jqNode.css({ position: 'relative' });
        for (var x = 1; x <= intShakes; x++) {
            jqNode.animate({ top: (intDistance * -1) }, (((intDuration / intShakes) / 4)))
            .animate({ top: intDistance }, ((intDuration / intShakes) / 2))
            .animate({ top: 0 }, (((intDuration / intShakes) / 4)));
        }
    });
    return this;
}