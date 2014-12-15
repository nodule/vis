state.dataset = new vis.DataSet(/*TODO: options*/);

state.dataset.on('*', function(event, properties, senderId) {
  // output() func available?
  output({
    event: event,
    properties: properties,
    senderId: senderId
  });
});

on.input.add    = state.dataset.add;
on.input.update = state.dataset.update;
on.input.remove = state.dataset.remove;

output({
  dataset: state.dataset
});
