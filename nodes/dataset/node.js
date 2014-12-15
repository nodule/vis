state.dataset = new vis.DataSet(/*TODO: options*/);

on.input.add = function () {
  state.dataset.add(data);
};
on.input.update = function () {
  state.dataset.update(data);
};
on.input.remove = function () {
  state.dataset.update(data);
};

output = fuction() {
  state.dataset.on('*', function(event, properties, senderId) {
    // output() func available?
    cb({
      event: {
        event: event,
        properties: properties,
        senderId: senderId
      }
    });
  });
}
