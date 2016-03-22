module.exports = {
  name: "dataset",
  ns: "vis",
  async: true,
  title: "Vis Dataset",
  description: "Vis Dataset",
  dependencies: {
    npm: {
      vis: require('vis')
    }
  },
  phrases: {
    active: "Creating Dataset"
  },
  ports: {
    input: {
      options: {
        type: "Object",
        title: "Options"
      },
      add: {
        type: "Object",
        title: "Add Item",
        description: "Add itemto this dataset",
        async: true,
        fn: function __ADD__(data, x, source, state, input, output, vis) {
          var r = function() {
            state.dataset.add($.add);
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      update: {
        type: "Object",
        title: "Update Item",
        description: "Update item within dataset",
        async: true,
        fn: function __UPDATE__(data, x, source, state, input, output, vis) {
          var r = function() {
            state.dataset.update($.update);
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      remove: {
        type: "any",
        title: "Remove Item",
        description: "Remove item from this dataset",
        async: true,
        fn: function __REMOVE__(data, x, source, state, input, output, vis) {
          var r = function() {
            state.dataset.update($.remove);
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      dataset: {
        type: "DataSet",
        title: "DataSet"
      },
      event: {
        type: "object",
        title: "Event",
        description: "Add, update or remove event"
      }
    }
  },
  state: {},
  on: {
    start: function __ONSTART__(data, x, source, state, input, output, vis) {
      var r = function() {
        // $.options will not work from here
        state.dataset = new vis.DataSet( /*$.options*/ );
        state.dataset.on('*', function(event, properties, senderId) {
          output({
            event: $.create({
              event: event,
              properties: properties,
              senderId: senderId
            })
          });
        });
        output({
          dataset: $.create(state.dataset)
        });
      }.call(this);
      return {
        state: state,
        return: r
      };
    }
  }
}