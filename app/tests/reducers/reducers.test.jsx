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

    it('should update existing todo', () => {
      var defaultState = [{
        id: 43,
        text: 'Some Todo',
        completed: true,
        createdAt: 10,
        completedAt: undefined
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: defaultState[0].id,
        updates
      };
      var res = reducers.todosReducer(df(defaultState), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(defaultState[0].text);
    });

  });

  describe('authReducer', () => {

    it('should store uid in auth state', () => {
      var action = {
        type: 'LOGIN',
        uid: 'someuid'
      };
      var expectedState = {
          uid: action.uid
      };

      var res1 = reducers.authReducer(undefined, df(action));
      expect(res1).toEqual(expectedState);
    });

    it('should remove uid in auth state', () => {
      var defaultState = {
          uid: 'someuid'
      };
      var action = {
        type: 'LOGOUT'
      };
      var res1 = reducers.authReducer(df(defaultState), df(action));
      expect(res1).toEqual({});

    });

  });

});
