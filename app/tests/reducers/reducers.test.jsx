var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });

  });

  describe('showCompletedReducer', () => {

    it('should flip showCompleted state', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res1 = reducers.showCompletedReducer(df(false), df(action));
      expect(res1).toEqual(true);

      var res2 = reducers.showCompletedReducer(df(true), df(action));
      expect(res2).toEqual(false);
    });

  });

  describe('todosReducer', () => {

    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 92384275
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'test',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos: todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should toggle existing todo', () => {
      var defaultState = [{
        id: 43,
        text: 'Some Todo',
        completed: false,
        createdAt: 10,
        completedAt: undefined
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 43
      };
      var res = reducers.todosReducer(df(defaultState), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toNotEqual(undefined);
    });

  });

});
