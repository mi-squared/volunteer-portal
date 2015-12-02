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
                    <option>Amharic</option>
                    <option>Arabic</option>
                    <option>Armenian</option>
                    <option>Bengali</option>
                    <option>Cajun</option>
                    <option>Chinese</option>
                    <option>Croatian</option>
                    <option>Czech</option>
                    <option>Danish</option>
                    <option>Dutch</option>
                    <option>English</option>
                    <option>Finnish</option>
                    <option>Formosan</option>
                    <option>French</option>
                    <option>French Creole</option>
                    <option>German</option>
                    <option>Greek</option>
                    <option>Gujarathi</option>
                    <option>Hebrew</option>
                    <option>Hindi (urdu)</option>
                    <option>Hungarian</option>
                    <option>Ilocano</option>
                    <option>Italian</option>
                    <option>Japanese</option>
                    <option>Korean</option>
                    <option>Kru</option>
                    <option>Lithuanian</option>
                    <option>Malayalam</option>
                    <option>Miao (hmong)</option>
                    <option>Mon-khmer (cambodian)</option>
                    <option>Navaho</option>
                    <option>Norwegian</option>
                    <option>Panjabi</option>
                    <option>Persian</option>
                    <option>Pennsylvania Dutch</option>
                    <option>Polish</option>
                    <option>Portuguese</option>
                    <option>Rumanian</option>
                    <option>Russian</option>
                    <option>Samoan</option>
                    <option>Serbocroatian</option>
                    <option>Slovak</option>
                    <option>Spanish</option>
                    <option>Swedish</option>
                    <option>Syriac</option>
                    <option>Tagalog</option>
                    <option>Thai (laotian)</option>
                    <option>Turkish</option>
                    <option>Ukrainian</option>
                    <option>Vietnamese</option>
                    <option>Yiddish</option>
            </MultiselectField>
        );
    }
});
