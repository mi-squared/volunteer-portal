import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import MultiselectField from '../components/multiselect-field.jsx';

export default React.createClass({

    getFieldName() {
        return this.props.fieldName.split(".")[1];
    },

    render: function() {
        return(
            <MultiselectField
                {...this.props}
                value={this.props.data[this.getFieldName()]}
                placeHolder="Click to choose languages">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Italian</option>
                    <option>Chinese</option>
                    <option>Tagalog</option>
                    <option>Polish</option>
                    <option>Korean</option>
                    <option>Vietnamese</option>
                    <option>Portuguese</option>
                    <option>Japanese</option>
                    <option>Greek</option>
                    <option>Arabic</option>
                    <option>Hindi (urdu)</option>
                    <option>Russian</option>
                    <option>Yiddish</option>
                    <option>Thai (laotian)</option>
                    <option>Persian</option>
                    <option>French Creole</option>
                    <option>Armenian</option>
                    <option>Navaho</option>
                    <option>Hungarian</option>
                    <option>Hebrew</option>
                    <option>Dutch</option>
                    <option>Mon-khmer (cambodian)</option>
                    <option>Gujarathi</option>
                    <option>Ukrainian</option>
                    <option>Czech</option>
                    <option>Pennsylvania Dutch</option>
                    <option>Miao (hmong)</option>
                    <option>Norwegian</option>
                    <option>Slovak</option>
                    <option>Swedish</option>
                    <option>Serbocroatian</option>
                    <option>Kru</option>
                    <option>Rumanian</option>
                    <option>Lithuanian</option>
                    <option>Finnish</option>
                    <option>Panjabi</option>
                    <option>Formosan</option>
                    <option>Croatian</option>
                    <option>Turkish</option>
                    <option>Ilocano</option>
                    <option>Bengali</option>
                    <option>Danish</option>
                    <option>Syriac</option>
                    <option>Samoan</option>
                    <option>Malayalam</option>
                    <option>Cajun</option>
                    <option>Amharic</option>
            </MultiselectField>
        );
    }
});