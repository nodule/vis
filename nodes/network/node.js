output = function() {
  var output = cb;
  var network = new vis.Network(
    input.container,
    input.data,
    input.options
  );

  function event(name) {
    return function(event) {

      if (typeof event !== undefined) {
        var out = {};
        out[name] = event;

        output(out);
      } else {
        // viewChanged for example..
        console.log('no output on event:', name);
      }

    };
  }

  [
   'select','click','doubleClick','hoverNode',
   'blurNode','resize','dragEnd','startStabilization',
   'stabilized','viewChanged','zoom'
  ].forEach(function(eventName) {
    // TODO: remove these on shutdown or removal.
    network.on(eventName, event(eventName));
  });

  output({network: network});

};
