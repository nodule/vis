state.dataset = new vis.DataSet(/*TODO: options*/);

on.setup = function() {
  state.dataset.on('*', function(event, properties, senderId) {
    output({
      event: {
        event: event,
        properties: properties,
        senderId: senderId
      }
    });
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

