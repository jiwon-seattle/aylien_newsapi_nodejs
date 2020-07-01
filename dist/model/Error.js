"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorLinks = _interopRequireDefault(require("./ErrorLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Error model module.
 * @module model/Error
 * @version 4.0.0
 */
var Error = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   */
  function Error() {
    _classCallCheck(this, Error);

    Error.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Error, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Error} obj Optional instance to populate.
     * @return {module:model/Error} The populated <code>Error</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Error();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');

          if ('code' !== 'code') {
            Object.defineProperty(obj, 'code', {
              get: function get() {
                return obj['code'];
              }
            });
          }
        }

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], 'String');

          if ('detail' !== 'detail') {
            Object.defineProperty(obj, 'detail', {
              get: function get() {
                return obj['detail'];
              }
            });
          }
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');

          if ('id' !== 'id') {
            Object.defineProperty(obj, 'id', {
              get: function get() {
                return obj['id'];
              }
            });
          }
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ErrorLinks["default"].constructFromObject(data['links']);

          if ('links' !== 'links') {
            Object.defineProperty(obj, 'links', {
              get: function get() {
                return obj['links'];
              }
            });
          }
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');

          if ('status' !== 'status') {
            Object.defineProperty(obj, 'status', {
              get: function get() {
                return obj['status'];
              }
            });
          }
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');

          if ('title' !== 'title') {
            Object.defineProperty(obj, 'title', {
              get: function get() {
                return obj['title'];
              }
            });
          }
        }
      }

      return obj;
    }
  }]);

  return Error;
}();
/**
 * @member {String} code
 */


Error.prototype['code'] = undefined;
/**
 * @member {String} detail
 */

Error.prototype['detail'] = undefined;
/**
 * @member {String} id
 */

Error.prototype['id'] = undefined;
/**
 * @member {module:model/ErrorLinks} links
 */

Error.prototype['links'] = undefined;
/**
 * @member {String} status
 */

Error.prototype['status'] = undefined;
/**
 * @member {String} title
 */

Error.prototype['title'] = undefined;
var _default = Error;
exports["default"] = _default;