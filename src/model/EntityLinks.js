/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EntityLinks model module.
 * @module model/EntityLinks
 * @version 4.1.1
 */
class EntityLinks {
    /**
     * Constructs a new <code>EntityLinks</code>.
     * @alias module:model/EntityLinks
     */
    constructor() { 
        
        EntityLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityLinks} obj Optional instance to populate.
     * @return {module:model/EntityLinks} The populated <code>EntityLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityLinks();

            if (data.hasOwnProperty('dbpedia')) {
                obj['dbpedia'] = ApiClient.convertToType(data['dbpedia'], 'String');

                if ('dbpedia' !== 'dbpedia') {
                  Object.defineProperty(obj, 'dbpedia', {
                    get() {
                      return obj['dbpedia'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * A dbpedia resource URL
 * @member {String} dbpedia
 */
EntityLinks.prototype['dbpedia'] = undefined;






export default EntityLinks;

