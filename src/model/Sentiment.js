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
 * The Sentiment model module.
 * @module model/Sentiment
 * @version 3.0.0
 */
class Sentiment {
    /**
     * Constructs a new <code>Sentiment</code>.
     * @alias module:model/Sentiment
     */
    constructor() { 
        
        Sentiment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Sentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Sentiment} obj Optional instance to populate.
     * @return {module:model/Sentiment} The populated <code>Sentiment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sentiment();

            if (data.hasOwnProperty('polarity')) {
                obj['polarity'] = ApiClient.convertToType(data['polarity'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Polarity of the sentiment
 * @member {module:model/Sentiment.PolarityEnum} polarity
 */
Sentiment.prototype['polarity'] = undefined;

/**
 * Polarity score of the sentiment
 * @member {Number} score
 */
Sentiment.prototype['score'] = undefined;





/**
 * Allowed values for the <code>polarity</code> property.
 * @enum {String}
 * @readonly
 */
Sentiment['PolarityEnum'] = {

    /**
     * value: "positive"
     * @const
     */
    "positive": "positive",

    /**
     * value: "neutral"
     * @const
     */
    "neutral": "neutral",

    /**
     * value: "negative"
     * @const
     */
    "negative": "negative"
};



export default Sentiment;
