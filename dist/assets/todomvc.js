'use strict';



;define("todomvc/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("todomvc/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "todomvc/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("todomvc/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("todomvc/components/footer", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <footer class="footer">
    <span class="todo-count">
  <strong>{{this.todos.incomplete.length}}</strong>
    {{#if this.todos.todoCountIsOne}}
      todo
    {{else}}
      todos
    {{/if}}
  left
  
    </span>
  
    <ul class="filters">
      <li>
        <LinkTo @route='index'>All</LinkTo>
        <LinkTo @route='active'>Active</LinkTo>
        <LinkTo @route='completed'>Completed</LinkTo>
  
      </li>
    </ul>
  
    <button type="button" class="clear-completed" {{on 'click' this.todos.clearCompleted}}>
      Clear Completed
    </button>
  </footer>
  
  
  */
  {
    "id": "zYCFM7pQ",
    "block": "[[[10,\"footer\"],[14,0,\"footer\"],[12],[1,\"\\n  \"],[10,1],[14,0,\"todo-count\"],[12],[1,\"\\n\"],[10,\"strong\"],[12],[1,[30,0,[\"todos\",\"incomplete\",\"length\"]]],[13],[1,\"\\n\"],[41,[30,0,[\"todos\",\"todoCountIsOne\"]],[[[1,\"    todo\\n\"]],[]],[[[1,\"    todos\\n\"]],[]]],[1,\"left\\n\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"ul\"],[14,0,\"filters\"],[12],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"All\"]],[]]]]],[1,\"\\n      \"],[8,[39,1],null,[[\"@route\"],[\"active\"]],[[\"default\"],[[[[1,\"Active\"]],[]]]]],[1,\"\\n      \"],[8,[39,1],null,[[\"@route\"],[\"completed\"]],[[\"default\"],[[[[1,\"Completed\"]],[]]]]],[1,\"\\n\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[11,\"button\"],[24,0,\"clear-completed\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,0,[\"todos\",\"clearCompleted\"]]],null],[12],[1,\"\\n    Clear Completed\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[],false,[\"if\",\"link-to\",\"on\"]]",
    "moduleName": "todomvc/components/footer.hbs",
    "isStrictMode": false
  });

  let FooterComponent = (_dec = (0, _service.inject)('todo-data'), (_class = class FooterComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = FooterComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, FooterComponent);
});
;define("todomvc/components/header", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <input
    class="new-todo"
    aria-label="What needs to be done?"
    placeholder="What needs to be done?"
    autofocus
    {{on 'keydown' this.onKeyDown}}
  >
  
  
  */
  {
    "id": "6fJ8bH2s",
    "block": "[[[11,\"input\"],[24,0,\"new-todo\"],[24,\"aria-label\",\"What needs to be done?\"],[24,\"placeholder\",\"What needs to be done?\"],[24,\"autofocus\",\"\"],[4,[38,0],[\"keydown\",[30,0,[\"onKeyDown\"]]],null],[12],[13],[1,\"\\n\\n\"]],[],false,[\"on\"]]",
    "moduleName": "todomvc/components/header.hbs",
    "isStrictMode": false
  });

  let HeaderComponent = (_dec = (0, _service.inject)('todo-data'), (_class = class HeaderComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

    onKeyDown(_ref2) {
      let {
        target,
        key
      } = _ref2;
      let text = target.value.trim();
      let hasValue = Boolean(text);

      if (key === 'Enter' && hasValue) {
        //alert(text);
        this.todos.add(text);
        target.value = '';
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "onKeyDown", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onKeyDown"), _class.prototype)), _class));
  _exports.default = HeaderComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, HeaderComponent);
});
;define("todomvc/components/todo-list", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <section class="main">
    <input id="mark-all-complete" class="toggle-all" type="checkbox">
    <label for="mark-all-complete">Mark all as complete</label>
  
    <ul class="todo-list">
  {{#each @todos as |todo|}}
    <Todo @todo={{todo}} />
  {{/each}}
  
    </ul>
  </section>
  
  
  */
  {
    "id": "71eDnwBB",
    "block": "[[[10,\"section\"],[14,0,\"main\"],[12],[1,\"\\n  \"],[10,\"input\"],[14,1,\"mark-all-complete\"],[14,0,\"toggle-all\"],[14,4,\"checkbox\"],[12],[13],[1,\"\\n  \"],[10,\"label\"],[14,\"for\",\"mark-all-complete\"],[12],[1,\"Mark all as complete\"],[13],[1,\"\\n\\n  \"],[10,\"ul\"],[14,0,\"todo-list\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,\"  \"],[8,[39,2],null,[[\"@todo\"],[[30,2]]],null],[1,\"\\n\"]],[2]],null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[\"@todos\",\"todo\"],false,[\"each\",\"-track-array\",\"todo\"]]",
    "moduleName": "todomvc/components/todo-list.hbs",
    "isStrictMode": false
  });

  let TodoListComponent = (_dec = (0, _service.inject)('todo-data'), (_class = class TodoListComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TodoListComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TodoListComponent);
});
;define("todomvc/components/todo", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <li class="{{ if @todo.isCompleted 'completed' }}">
  
    <div class="view">
      <input
        aria-label="Toggle the completion of this todo"
        class="toggle"
        type="checkbox"
        checked={{ @todo.isCompleted }}
        {{ on 'change' (fn this.todos.toggleCompletion @todo) }}
      >
      <label>{{@todo.text}}</label>
      <button
        type="button"
        class="destroy"
        title="Remove this todo"
      ></button>
    </div>
  
    <input autofocus class="edit" value="Todo Text">
  </li>
  
  
  */
  {
    "id": "m+66jDNI",
    "block": "[[[10,\"li\"],[15,0,[29,[[52,[30,1,[\"isCompleted\"]],\"completed\"]]]],[12],[1,\"\\n\\n  \"],[10,0],[14,0,\"view\"],[12],[1,\"\\n    \"],[11,\"input\"],[24,\"aria-label\",\"Toggle the completion of this todo\"],[24,0,\"toggle\"],[16,\"checked\",[30,1,[\"isCompleted\"]]],[24,4,\"checkbox\"],[4,[38,1],[\"change\",[28,[37,2],[[30,0,[\"todos\",\"toggleCompletion\"]],[30,1]],null]],null],[12],[13],[1,\"\\n    \"],[10,\"label\"],[12],[1,[30,1,[\"text\"]]],[13],[1,\"\\n    \"],[10,\"button\"],[14,0,\"destroy\"],[14,\"title\",\"Remove this todo\"],[14,4,\"button\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"input\"],[14,\"autofocus\",\"\"],[14,0,\"edit\"],[14,2,\"Todo Text\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[\"@todo\"],false,[\"if\",\"on\",\"fn\"]]",
    "moduleName": "todomvc/components/todo.hbs",
    "isStrictMode": false
  });

  let TodoComponent = (_dec = (0, _service.inject)('todo-data'), (_class = class TodoComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TodoComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TodoComponent);
});
;define("todomvc/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("todomvc/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("todomvc/helpers/app-version", ["exports", "@ember/component/helper", "todomvc/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("todomvc/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("todomvc/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("todomvc/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("todomvc/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "todomvc/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("todomvc/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("todomvc/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("todomvc/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("todomvc/initializers/export-application-global", ["exports", "ember", "todomvc/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("todomvc/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("todomvc/router", ["exports", "@ember/routing/router", "todomvc/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('completed');
    this.route('active');
  });
});
;define("todomvc/routes/active", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ActiveRoute = (_dec = (0, _service.inject)('todo-data'), (_class = class ActiveRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

    model() {
      let todos = this.todos;
      return {
        get activeTodos() {
          return todos.incomplete;
        }

      };
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ActiveRoute;
});
;define("todomvc/routes/completed", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let CompletedRoute = (_dec = (0, _service.inject)('todo-data'), (_class = class CompletedRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

    model() {
      let todos = this.todos;
      return {
        get completedTodos() {
          return todos.completed;
        }

      };
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = CompletedRoute;
});
;define("todomvc/routes/index", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexRoute = (_dec = (0, _service.inject)('todo-data'), (_class = class IndexRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

    model() {
      let todos = this.todos;
      return {
        get allTodos() {
          return todos.all;
        }

      };
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = IndexRoute;
});
;define("todomvc/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("todomvc/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("todomvc/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("todomvc/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("todomvc/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("todomvc/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("todomvc/services/todo-data", ["exports", "@ember/service", "@glimmer/tracking", "@ember/object"], function (_exports, _service, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _class3, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let Todo = (_class = class Todo {
    constructor(text) {
      _initializerDefineProperty(this, "text", _descriptor, this);

      _initializerDefineProperty(this, "isCompleted", _descriptor2, this);

      this.text = text;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "text", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isCompleted", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  })), _class);
  let TodoDataService = (_class3 = class TodoDataService extends _service.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "todos", _descriptor3, this);
    }

    get all() {
      return this.todos;
    }

    get incomplete() {
      return this.todos.filter(todo => {
        return todo.isCompleted === false;
      });
    }

    get completed() {
      return this.todos.filter(todo => todo.isCompleted);
    }

    add(text) {
      let newTodo = new Todo(text);
      this.todos = [...this.todos, newTodo];
    }

    clearCompleted() {
      this.todos = this.incomplete;
    }

    toggleCompletion(todo) {
      todo.isCompleted = !todo.isCompleted;
    }

  }, (_descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "todos", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class3.prototype, "add", [_object.action], Object.getOwnPropertyDescriptor(_class3.prototype, "add"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "clearCompleted", [_object.action], Object.getOwnPropertyDescriptor(_class3.prototype, "clearCompleted"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "toggleCompletion", [_object.action], Object.getOwnPropertyDescriptor(_class3.prototype, "toggleCompletion"), _class3.prototype)), _class3);
  _exports.default = TodoDataService;
});
;define("todomvc/templates/active", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "o3/lf5bX",
    "block": "[[[1,[28,[35,0],[\"Active\"],null]],[1,\"\\n\"],[8,[39,1],null,[[\"@todos\"],[[30,1,[\"activeTodos\"]]]],null],[1,\"\\n\"]],[\"@model\"],false,[\"page-title\",\"todo-list\"]]",
    "moduleName": "todomvc/templates/active.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("todomvc/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "HSGpT1Fc",
    "block": "[[[10,\"section\"],[14,0,\"todoapp\"],[12],[1,\"\\n  \"],[10,\"h1\"],[12],[1,\"todos\"],[13],[1,\"\\n\\n  \"],[8,[39,0],null,null,null],[1,\"\\n  \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[8,[39,3],null,null,null],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"]],[],false,[\"header\",\"component\",\"-outlet\",\"footer\"]]",
    "moduleName": "todomvc/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("todomvc/templates/completed", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "QK8kJsPL",
    "block": "[[[1,[28,[35,0],[\"Completed\"],null]],[1,\"\\n\"],[8,[39,1],null,[[\"@todos\"],[[30,1,[\"completedTodos\"]]]],null],[1,\"\\n\"]],[\"@model\"],false,[\"page-title\",\"todo-list\"]]",
    "moduleName": "todomvc/templates/completed.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("todomvc/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "xSzFODKV",
    "block": "[[[1,[28,[35,0],[\"Index\"],null]],[1,\"\\n\"],[8,[39,1],null,[[\"@todos\"],[[30,1,[\"allTodos\"]]]],null],[1,\"\\n\"]],[\"@model\"],false,[\"page-title\",\"todo-list\"]]",
    "moduleName": "todomvc/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("todomvc/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("todomvc/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("todomvc/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("todomvc/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('todomvc/config/environment', [], function() {
  var prefix = 'todomvc';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("todomvc/app")["default"].create({"name":"todomvc","version":"0.0.0+ad19315c"});
          }
        
//# sourceMappingURL=todomvc.map
