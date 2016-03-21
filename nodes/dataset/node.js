on.start = function() {
  // input.options will not work from here
  state.dataset = new vis.DataSet(/*input.options*/);
  state.dataset.on('*', function(event, properties, senderId) {
    output({
      event: {
        event: event,
        properties: properties,
        senderId: senderId
      }
    });
  });
  output({
    dataset: state.dataset
  });
};

on.input.add = function () {
  state.dataset.add(input.add);
};
on.input.update = function () {
  state.dataset.update(input.update);
};
on.input.remove = function () {
  state.dataset.update(input.remove);
};

