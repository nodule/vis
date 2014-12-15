state.dataset = new vis.DataSet(/*TODO: options*/);

// too early, listeners for output are not yet setup..
on.start = function() {
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
  state.dataset.add(data);
};
on.input.update = function () {
  state.dataset.update(data);
};
on.input.remove = function () {
  state.dataset.update(data);
};

