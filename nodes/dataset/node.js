on.start = function() {
  // $.options will not work from here
  state.dataset = new vis.DataSet(/*$.options*/);
  state.dataset.on('*', function(event, properties, senderId) {
    output({
      event: $.create({event: event, properties: properties, senderId: senderId})
    });
  });
  output({dataset: $.create(state.dataset)});
};

on.input.add = function () {
  state.dataset.add($.add);
};
on.input.update = function () {
  state.dataset.update($.update);
};
on.input.remove = function () {
  state.dataset.update($.remove);
};

