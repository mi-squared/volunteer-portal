<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Option as Option; // to use Eloquent Model

class OptionsSeeder extends Seeder {
    public function run() {
        // clear table
        Option::truncate();
        // add 1st row

        // Options
        Option::create( [
        	'name' => 'Full day',
        	'value' => 'full',
        	'form_list_id' => '14'
        ] );
        Option::create( [
        	'name' => 'Half day',
        	'value' => 'half',
        	'form_list_id' => '14'
        ] );
        Option::create( [
        	'name' => 'AM',
        	'value' => 'am',
        	'form_list_id' => '15'
        ] );
        Option::create( [
        	'name' => 'PM',
        	'value' => 'pm',
        	'form_list_id' => '15'
        ] );
        Option::create( [
        	'name' => 'Afghanistan',
        	'value' => 'AFG',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Åland Islands',
        	'value' => 'ALA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Albania',
        	'value' => 'ALB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Algeria',
        	'value' => 'DZA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'American Samoa',
        	'value' => 'ASM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Andorra',
        	'value' => 'AND',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Angola',
        	'value' => 'AGO',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Anguilla',
        	'value' => 'AIA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Antarctica',
        	'value' => 'ATA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Antigua and Barbuda',
        	'value' => 'ATG',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Argentina',
        	'value' => 'ARG',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Armenia',
        	'value' => 'ARM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Aruba',
        	'value' => 'ABW',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Australia',
        	'value' => 'AUS',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Austria',
        	'value' => 'AUT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Azerbaijan',
        	'value' => 'AZE',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Bahamas',
        	'value' => 'BHS',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Bangladesh',
        	'value' => 'BGD',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Barbados',
        	'value' => 'BRB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Bahrain',
        	'value' => 'BHR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Belarus',
        	'value' => 'BLR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Belgium',
        	'value' => 'BEL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Belize',
        	'value' => 'BLZ',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Benin',
        	'value' => 'BEN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Bermuda',
        	'value' => 'BMU',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Bhutan',
        	'value' => 'BTN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Bolivia, Plurinational State of',
        	'value' => 'BOL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Bonaire, Sint Eustatius and Saba',
        	'value' => 'BES',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Bosnia and Herzegovina',
        	'value' => 'BIH',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Botswana',
        	'value' => 'BWA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Bouvet Island',
        	'value' => 'BVT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Brazil',
        	'value' => 'BRA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'British Indian Ocean Territory',
        	'value' => 'IOT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Brunei Darussalam',
        	'value' => 'BRN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Bulgaria',
        	'value' => 'BGR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Burkina Faso',
        	'value' => 'BFA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Burundi',
        	'value' => 'BDI',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Cambodia',
        	'value' => 'KHM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Cameroon',
        	'value' => 'CMR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Canada',
        	'value' => 'CAN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Cape Verde',
        	'value' => 'CPV',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Cayman Islands',
        	'value' => 'CYM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Central African Republic',
        	'value' => 'CAF',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Chad',
        	'value' => 'TCD',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Chile',
        	'value' => 'CHL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'China',
        	'value' => 'CHN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Christmas Island',
        	'value' => 'CXR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Cocos (Keeling) Islands',
        	'value' => 'CCK',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Colombia',
        	'value' => 'COL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Comoros',
        	'value' => 'COM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Congo',
        	'value' => 'COG',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Congo, the Democratic Republic of the',
        	'value' => 'COD',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Cook Islands',
        	'value' => 'COK',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Costa Rica',
        	'value' => 'CRI',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Côte d\'Ivoire',
        	'value' => 'CIV',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Croatia',
        	'value' => 'HRV',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Cuba',
        	'value' => 'CUB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Curaçao',
        	'value' => 'CUW',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Cyprus',
        	'value' => 'CYP',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Czech Republic',
        	'value' => 'CZE',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Denmark',
        	'value' => 'DNK',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Djibouti',
        	'value' => 'DJI',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Dominica',
        	'value' => 'DMA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Dominican Republic',
        	'value' => 'DOM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Ecuador',
        	'value' => 'ECU',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Egypt',
        	'value' => 'EGY',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'El Salvador',
        	'value' => 'SLV',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Equatorial Guinea',
        	'value' => 'GNQ',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Eritrea',
        	'value' => 'ERI',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Estonia',
        	'value' => 'EST',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Ethiopia',
        	'value' => 'ETH',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Falkland Islands (Malvinas)',
        	'value' => 'FLK',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Faroe Islands',
        	'value' => 'FRO',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Fiji',
        	'value' => 'FJI',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Finland',
        	'value' => 'FIN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'France',
        	'value' => 'FRA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'French Guiana',
        	'value' => 'GUF',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'French Polynesia',
        	'value' => 'PYF',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'French Southern Territories',
        	'value' => 'ATF',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Gabon',
        	'value' => 'GAB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Gambia',
        	'value' => 'GMB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Georgia',
        	'value' => 'GEO',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Germany',
        	'value' => 'DEU',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Ghana',
        	'value' => 'GHA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Gibraltar',
        	'value' => 'GIB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Greece',
        	'value' => 'GRC',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Greenland',
        	'value' => 'GRL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Grenada',
        	'value' => 'GRD',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Guadeloupe',
        	'value' => 'GLP',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Guam',
        	'value' => 'GUM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Guatemala',
        	'value' => 'GTM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Guernsey',
        	'value' => 'GGY',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Guinea',
        	'value' => 'GIN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Guinea-Bissau',
        	'value' => 'GNB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Guyana',
        	'value' => 'GUY',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Haiti',
        	'value' => 'HTI',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Heard Island and McDonald Islands',
        	'value' => 'HMD',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Holy See (Vatican City State)',
        	'value' => 'VAT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Honduras',
        	'value' => 'HND',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Hong Kong',
        	'value' => 'HKG',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Hungary',
        	'value' => 'HUN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Iceland',
        	'value' => 'ISL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'India',
        	'value' => 'IND',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Indonesia',
        	'value' => 'IDN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Iran, Islamic Republic of',
        	'value' => 'IRN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Iraq',
        	'value' => 'IRQ',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Ireland',
        	'value' => 'IRL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Isle of Man',
        	'value' => 'IMN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Israel',
        	'value' => 'ISR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Italy',
        	'value' => 'ITA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Jamaica',
        	'value' => 'JAM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Japan',
        	'value' => 'JPN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Jersey',
        	'value' => 'JEY',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Jordan',
        	'value' => 'JOR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Kazakhstan',
        	'value' => 'KAZ',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Kenya',
        	'value' => 'KEN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Kiribati',
        	'value' => 'KIR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Korea, Democratic People\'s Republic of',
        	'value' => 'PRK',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Korea, Republic of',
        	'value' => 'KOR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Kuwait',
        	'value' => 'KWT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Kyrgyzstan',
        	'value' => 'KGZ',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Lao People\'s Democratic Republic',
        	'value' => 'LAO',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Latvia',
        	'value' => 'LVA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Lebanon',
        	'value' => 'LBN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Lesotho',
        	'value' => 'LSO',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Liberia',
        	'value' => 'LBR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Libya',
        	'value' => 'LBY',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Liechtenstein',
        	'value' => 'LIE',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Lithuania',
        	'value' => 'LTU',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Luxembourg',
        	'value' => 'LUX',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Macao',
        	'value' => 'MAC',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Macedonia, the former Yugoslav Republic of',
        	'value' => 'MKD',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Madagascar',
        	'value' => 'MDG',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Malawi',
        	'value' => 'MWI',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Malaysia',
        	'value' => 'MYS',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Maldives',
        	'value' => 'MDV',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Mali',
        	'value' => 'MLI',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Malta',
        	'value' => 'MLT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Marshall Islands',
        	'value' => 'MHL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Martinique',
        	'value' => 'MTQ',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Mauritania',
        	'value' => 'MRT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Mauritius',
        	'value' => 'MUS',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Mayotte',
        	'value' => 'MYT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Mexico',
        	'value' => 'MEX',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Micronesia, Federated States of',
        	'value' => 'FSM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Moldova, Republic of',
        	'value' => 'MDA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Monaco',
        	'value' => 'MCO',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Mongolia',
        	'value' => 'MNG',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Montenegro',
        	'value' => 'MNE',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Montserrat',
        	'value' => 'MSR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Morocco',
        	'value' => 'MAR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Mozambique',
        	'value' => 'MOZ',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Myanmar',
        	'value' => 'MMR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Namibia',
        	'value' => 'NAM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Nauru',
        	'value' => 'NRU',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Nepal',
        	'value' => 'NPL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Netherlands',
        	'value' => 'NLD',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'New Caledonia',
        	'value' => 'NCL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'New Zealand',
        	'value' => 'NZL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Nicaragua',
        	'value' => 'NIC',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Niger',
        	'value' => 'NER',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Nigeria',
        	'value' => 'NGA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Niue',
        	'value' => 'NIU',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Norfolk Island',
        	'value' => 'NFK',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Northern Mariana Islands',
        	'value' => 'MNP',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Norway',
        	'value' => 'NOR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Oman',
        	'value' => 'OMN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Pakistan',
        	'value' => 'PAK',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Palau',
        	'value' => 'PLW',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Palestinian Territory, Occupied',
        	'value' => 'PSE',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Panama',
        	'value' => 'PAN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Papua New Guinea',
        	'value' => 'PNG',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Paraguay',
        	'value' => 'PRY',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Peru',
        	'value' => 'PER',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Philippines',
        	'value' => 'PHL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Pitcairn',
        	'value' => 'PCN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Poland',
        	'value' => 'POL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Portugal',
        	'value' => 'PRT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Puerto Rico',
        	'value' => 'PRI',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Qatar',
        	'value' => 'QAT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Réunion',
        	'value' => 'REU',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Romania',
        	'value' => 'ROU',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Russian Federation',
        	'value' => 'RUS',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Rwanda',
        	'value' => 'RWA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Saint Barthélemy',
        	'value' => 'BLM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Saint Helena, Ascension and Tristan da Cunha',
        	'value' => 'SHN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Saint Kitts and Nevis',
        	'value' => 'KNA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Saint Lucia',
        	'value' => 'LCA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Saint Martin (French part)',
        	'value' => 'MAF',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Saint Pierre and Miquelon',
        	'value' => 'SPM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Saint Vincent and the Grenadines',
        	'value' => 'VCT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Samoa',
        	'value' => 'WSM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'San Marino',
        	'value' => 'SMR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Sao Tome and Principe',
        	'value' => 'STP',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Saudi Arabia',
        	'value' => 'SAU',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Senegal',
        	'value' => 'SEN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Serbia',
        	'value' => 'SRB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Seychelles',
        	'value' => 'SYC',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Sierra Leone',
        	'value' => 'SLE',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Singapore',
        	'value' => 'SGP',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Sint Maarten (Dutch part)',
        	'value' => 'SXM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Slovakia',
        	'value' => 'SVK',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Slovenia',
        	'value' => 'SVN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Solomon Islands',
        	'value' => 'SLB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Somalia',
        	'value' => 'SOM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'South Africa',
        	'value' => 'ZAF',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'South Georgia and the South Sandwich Islands',
        	'value' => 'SGS',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'South Sudan',
        	'value' => 'SSD',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Spain',
        	'value' => 'ESP',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Sri Lanka',
        	'value' => 'LKA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Sudan',
        	'value' => 'SDN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Suriname',
        	'value' => 'SUR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Svalbard and Jan Mayen',
        	'value' => 'SJM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Swaziland',
        	'value' => 'SWZ',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Sweden',
        	'value' => 'SWE',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Switzerland',
        	'value' => 'CHE',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Syrian Arab Republic',
        	'value' => 'SYR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Taiwan, Province of China',
        	'value' => 'TWN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Tajikistan',
        	'value' => 'TJK',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Tanzania, United Republic of',
        	'value' => 'TZA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Thailand',
        	'value' => 'THA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Timor-Leste',
        	'value' => 'TLS',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Togo',
        	'value' => 'TGO',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Tokelau',
        	'value' => 'TKL',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Tonga',
        	'value' => 'TON',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Trinidad and Tobago',
        	'value' => 'TTO',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Tunisia',
        	'value' => 'TUN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Turkey',
        	'value' => 'TUR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Turkmenistan',
        	'value' => 'TKM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Turks and Caicos Islands',
        	'value' => 'TCA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Tuvalu',
        	'value' => 'TUV',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Uganda',
        	'value' => 'UGA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Ukraine',
        	'value' => 'UKR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'United Arab Emirates',
        	'value' => 'ARE',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'United Kingdom',
        	'value' => 'GBR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'United States',
        	'value' => 'USA',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'United States Minor Outlying Islands',
        	'value' => 'UMI',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Uruguay',
        	'value' => 'URY',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Uzbekistan',
        	'value' => 'UZB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Vanuatu',
        	'value' => 'VUT',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Venezuela, Bolivarian Republic of',
        	'value' => 'VEN',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Viet Nam',
        	'value' => 'VNM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Virgin Islands, British',
        	'value' => 'VGB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Virgin Islands, U.S.',
        	'value' => 'VIR',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Wallis and Futuna',
        	'value' => 'WLF',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Western Sahara',
        	'value' => 'ESH',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Yemen',
        	'value' => 'YEM',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Zambia',
        	'value' => 'ZMB',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Zimbabwe',
        	'value' => 'ZWE',
        	'form_list_id' => '2'
        ] );
        Option::create( [
        	'name' => 'Academy Bus Transportation',
        	'value' => 'Academy Bus Transportation',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Active Manual Relaxation/Hydrotherapy',
        	'value' => 'Active Manual Relaxation/Hydrotherapy',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Audio Visual',
        	'value' => 'Audio Visual',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Audio Visual Food Demonstration',
        	'value' => 'Audio Visual Food Demonstration',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Audiology',
        	'value' => 'Audiology',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Beautician/Barber Service',
        	'value' => 'Beautician/Barber Service',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Central Supply',
        	'value' => 'Central Supply',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Chaplaincy',
        	'value' => 'Chaplaincy',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Children’s Department Adult Volunteer',
        	'value' => 'Children’s Department Adult Volunteer',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Communications-Media',
        	'value' => 'Communications-Media',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Director’s/Assistant Director’s',
        	'value' => 'Director’s/Assistant Director’s',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Exit Management',
        	'value' => 'Exit Management',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Eye Care',
        	'value' => 'Eye Care',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Food Demonstration',
        	'value' => 'Food Demonstration',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Food Services',
        	'value' => 'Food Services',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Hospitality',
        	'value' => 'Hospitality',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Hospitality Decorations',
        	'value' => 'Hospitality Decorations',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Hospitality-Tour Guide',
        	'value' => 'Hospitality-Tour Guide',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Interpretation',
        	'value' => 'Interpretation',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Lab',
        	'value' => 'Lab',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Lifestyle',
        	'value' => 'Lifestyle',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Mental Health',
        	'value' => 'Mental Health',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Music Therapy',
        	'value' => 'Music Therapy',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Pediatrics',
        	'value' => 'Pediatrics',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Pharmacy',
        	'value' => 'Pharmacy',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Plant Services',
        	'value' => 'Plant Services',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Podiatry',
        	'value' => 'Podiatry',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Primary Care',
        	'value' => 'Primary Care',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Program Committee',
        	'value' => 'Program Committee',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'PT/OT',
        	'value' => 'PT/OT',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Radiology',
        	'value' => 'Radiology',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Registration',
        	'value' => 'Registration',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Respiratory Therapy',
        	'value' => 'Respiratory Therapy',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Security',
        	'value' => 'Security',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Surgery',
        	'value' => 'Surgery',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Triage',
        	'value' => 'Triage',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Volunteer Registration',
        	'value' => 'Volunteer Registration',
        	'form_list_id' => '9'
        ] );
        Option::create( [
        	'name' => 'Women’s Health',
        	'value' => 'Women’s Health',
        	'form_list_id' => '9'
        ] );
        Option::create( [
          'name' => '-- select --',
          'value' => '',
          'form_list_id' => '11'
        ] );
        Option::create( [
        	'name' => '0-23mos',
        	'value' => '0-23mos',
        	'form_list_id' => '11'
        ] );
        Option::create( [
        	'name' => '2-4',
        	'value' => '2-4',
        	'form_list_id' => '11'
        ] );
        Option::create( [
        	'name' => '5-6',
        	'value' => '5-6',
        	'form_list_id' => '11'
        ] );
        Option::create( [
        	'name' => '7-9',
        	'value' => '7-9',
        	'form_list_id' => '11'
        ] );
        Option::create( [
        	'name' => '10-12',
        	'value' => '10-12',
        	'form_list_id' => '11'
        ] );
        Option::create( [
          'name' => '-- select --',
          'value' => '',
          'form_list_id' => '3'
        ] );
        Option::create( [
        	'name' => 'Extra small',
        	'value' => 'xsm',
        	'form_list_id' => '3'
        ] );
        Option::create( [
        	'name' => 'Small',
        	'value' => 'sm',
        	'form_list_id' => '3'
        ] );
        Option::create( [
        	'name' => 'Medium',
        	'value' => 'med',
        	'form_list_id' => '3'
        ] );
        Option::create( [
        	'name' => 'Large',
        	'value' => 'lrg',
        	'form_list_id' => '3'
        ] );
        Option::create( [
        	'name' => 'Extra large',
        	'value' => 'xlrg',
        	'form_list_id' => '3'
        ] );
        Option::create( [
          'name' => '-- select --',
          'value' => '',
          'form_list_id' => '12'
        ] );
        Option::create( [
        	'name' => 'Male',
        	'value' => 'male',
        	'form_list_id' => '12'
        ] );
        Option::create( [
        	'name' => 'Female',
        	'value' => 'female',
        	'form_list_id' => '12'
        ] );
        Option::create( [
        	'name' => '-- select --',
        	'value' => '',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => 'Advertisement',
        	'value' => 'advertisement',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => 'Email/Newsletter',
        	'value' => 'email-newsletter',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => 'Facebook',
        	'value' => 'facebook',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => 'Family or Friend',
        	'value' => 'family-friend',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => 'Newspaper Story',
        	'value' => 'newspaper',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => 'TV',
        	'value' => 'tv',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => 'Twitter',
        	'value' => 'twitter',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => 'Website/Search Engine',
        	'value' => 'website-search-engine',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => 'YouTube',
        	'value' => 'youtube',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => 'Other',
        	'value' => 'other',
        	'form_list_id' => '5'
        ] );
        Option::create( [
        	'name' => '-- select --',
        	'value' => '',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Advanced Registered Nurse Practitioner',
        	'value' => 'Advanced Registered Nurse Practitioner',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Audiologist',
        	'value' => 'Audiologist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Certified Counselor',
        	'value' => 'Certified Counselor',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Certified Massage Therapist',
        	'value' => 'Certified Massage Therapist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Certified Midwife',
        	'value' => 'Certified Midwife',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Certified Nurse Midwife',
        	'value' => 'Certified Nurse Midwife',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Certified Nursing Assistant',
        	'value' => 'Certified Nursing Assistant',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Certified Radiologic Technologist',
        	'value' => 'Certified Radiologic Technologist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Certified Registered Nurse Anesthetist',
        	'value' => 'Certified Registered Nurse Anesthetist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Chiropractor',
        	'value' => 'Chiropractor',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Dental Assistant',
        	'value' => 'Dental Assistant',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Dental Hygienist',
        	'value' => 'Dental Hygienist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Dentist',
        	'value' => 'Dentist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Doctor',
        	'value' => 'Doctor',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Drivers License Commercial Class A',
        	'value' => 'Drivers License Commercial Class A',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Drivers License Commercial Class B',
        	'value' => 'Drivers License Commercial Class B',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Drivers License Commercial Class C',
        	'value' => 'Drivers License Commercial Class C',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Emergency Medical Technician',
        	'value' => 'Emergency Medical Technician',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Laboratory Technician',
        	'value' => 'Laboratory Technician',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Licensed Massage Therapist',
        	'value' => 'Licensed Massage Therapist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Licensed Vocational or Practical Nurse',
        	'value' => 'Licensed Vocational or Practical Nurse',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Naturopath',
        	'value' => 'Naturopath',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Occupational Therapist',
        	'value' => 'Occupational Therapist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Ophthalmologist',
        	'value' => 'Ophthalmologist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Optician',
        	'value' => 'Optician',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Optometrist',
        	'value' => 'Optometrist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Osteopath',
        	'value' => 'Osteopath',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Paramedic',
        	'value' => 'Paramedic',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Physical Therapist',
        	'value' => 'Physical Therapist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Physician\'s Assistant',
        	'value' => 'Physician\'s Assistant',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Podiatrist',
        	'value' => 'Podiatrist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Registered Dietitian',
        	'value' => 'Registered Dietitian',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Registered Nurse',
        	'value' => 'Registered Nurse',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Respiratory Therapist',
        	'value' => 'Respiratory Therapist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Social Worker',
        	'value' => 'Social Worker',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Speech & Language Pathologist',
        	'value' => 'Speech & Language Pathologist',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Surgical Technician',
        	'value' => 'Surgical Technician',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Ultrasound Technician',
        	'value' => 'Ultrasound Technician',
        	'form_list_id' => '6'
        ] );
        Option::create( [
        	'name' => 'Other',
        	'value' => 'other',
        	'form_list_id' => '6'
        ] );
        Option::create( [
          'name' => '-- select --',
          'value' => '',
          'form_list_id' => '8'
        ] );
        Option::create( [
        	'name' => 'AHA',
        	'value' => 'aha',
        	'form_list_id' => '8'
        ] );
        Option::create( [
        	'name' => 'Red Cross',
        	'value' => 'sm',
        	'form_list_id' => '8'
        ] );
        Option::create( [
        	'name' => 'Other',
        	'value' => 'other',
        	'form_list_id' => '8'
        ] );
        Option::create( [
        	'name' => '-- select --',
        	'value' => '',
        	'form_list_id' => '13'
        ] );
        Option::create( [
        	'name' => 'High school',
        	'value' => 'highschool',
        	'form_list_id' => '13'
        ] );
        Option::create( [
        	'name' => 'College',
        	'value' => 'college',
        	'form_list_id' => '13'
        ] );
        Option::create( [
        	'name' => 'University',
        	'value' => 'university',
        	'form_list_id' => '13'
        ] );
        Option::create( [
          'name' => '--',
          'value' => '',
          'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'AL',
        	'value' => 'AL',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'AK',
        	'value' => 'AK',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'AS',
        	'value' => 'AS',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'AZ',
        	'value' => 'AZ',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'AR',
        	'value' => 'AR',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'CA',
        	'value' => 'CA',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'CO',
        	'value' => 'CO',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'CT',
        	'value' => 'CT',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'DE',
        	'value' => 'DE',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'DC',
        	'value' => 'DC',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'FM',
        	'value' => 'FM',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'FL',
        	'value' => 'FL',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'GA',
        	'value' => 'GA',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'GU',
        	'value' => 'GU',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'HI',
        	'value' => 'HI',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'ID',
        	'value' => 'ID',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'IL',
        	'value' => 'IL',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'IN',
        	'value' => 'IN',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'IA',
        	'value' => 'IA',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'KS',
        	'value' => 'KS',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'KY',
        	'value' => 'KY',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'LA',
        	'value' => 'LA',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'ME',
        	'value' => 'ME',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'MH',
        	'value' => 'MH',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'MD',
        	'value' => 'MD',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'MA',
        	'value' => 'MA',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'MI',
        	'value' => 'MI',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'MN',
        	'value' => 'MN',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'MS',
        	'value' => 'MS',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'MO',
        	'value' => 'MO',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'MT',
        	'value' => 'MT',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'NE',
        	'value' => 'NE',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'NV',
        	'value' => 'NV',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'NH',
        	'value' => 'NH',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'NJ',
        	'value' => 'NJ',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'NM',
        	'value' => 'NM',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'NY',
        	'value' => 'NY',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'NC',
        	'value' => 'NC',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'ND',
        	'value' => 'ND',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'MP',
        	'value' => 'MP',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'OH',
        	'value' => 'OH',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'OK',
        	'value' => 'OK',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'OR',
        	'value' => 'OR',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'PW',
        	'value' => 'PW',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'PA',
        	'value' => 'PA',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'PR',
        	'value' => 'PR',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'RI',
        	'value' => 'RI',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'SC',
        	'value' => 'SC',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'SD',
        	'value' => 'SD',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'TN',
        	'value' => 'TN',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'TX',
        	'value' => 'TX',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'UT',
        	'value' => 'UT',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'VT',
        	'value' => 'VT',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'VI',
        	'value' => 'VI',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'VA',
        	'value' => 'VA',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'WA',
        	'value' => 'WA',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'WV',
        	'value' => 'WV',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'WI',
        	'value' => 'WI',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'WY',
        	'value' => 'WY',
        	'form_list_id' => '1'
        ] );
        Option::create( [
        	'name' => 'Amharic',
        	'value' => 'Amharic',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Arabic',
        	'value' => 'Arabic',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Armenian',
        	'value' => 'Armenian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Bengali',
        	'value' => 'Bengali',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Cajun',
        	'value' => 'Cajun',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Chinese',
        	'value' => 'Chinese',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Croatian',
        	'value' => 'Croatian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Czech',
        	'value' => 'Czech',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Danish',
        	'value' => 'Danish',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Dutch',
        	'value' => 'Dutch',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'English',
        	'value' => 'English',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Finnish',
        	'value' => 'Finnish',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Formosan',
        	'value' => 'Formosan',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'French',
        	'value' => 'French',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'French Creole',
        	'value' => 'French Creole',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'German',
        	'value' => 'German',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Greek',
        	'value' => 'Greek',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Gujarathi',
        	'value' => 'Gujarathi',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Hebrew',
        	'value' => 'Hebrew',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Hindi (urdu)',
        	'value' => 'Hindi (urdu)',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Hungarian',
        	'value' => 'Hungarian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Ilocano',
        	'value' => 'Ilocano',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Italian',
        	'value' => 'Italian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Japanese',
        	'value' => 'Japanese',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Korean',
        	'value' => 'Korean',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Kru',
        	'value' => 'Kru',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Lithuanian',
        	'value' => 'Lithuanian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Malayalam',
        	'value' => 'Malayalam',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Miao (hmong)',
        	'value' => 'Miao (hmong)',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Mon-khmer (cambodian)',
        	'value' => 'Mon-khmer (cambodian)',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Navaho',
        	'value' => 'Navaho',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Norwegian',
        	'value' => 'Norwegian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Other',
        	'value' => 'Other',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Panjabi',
        	'value' => 'Panjabi',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Persian',
        	'value' => 'Persian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Pennsylvania Dutch',
        	'value' => 'Pennsylvania Dutch',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Polish',
        	'value' => 'Polish',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Portuguese',
        	'value' => 'Portuguese',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Rumanian',
        	'value' => 'Rumanian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Russian',
        	'value' => 'Russian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Samoan',
        	'value' => 'Samoan',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Serbocroatian',
        	'value' => 'Serbocroatian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Slovak',
        	'value' => 'Slovak',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Spanish',
        	'value' => 'Spanish',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Swedish',
        	'value' => 'Swedish',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Syriac',
        	'value' => 'Syriac',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Tagalog',
        	'value' => 'Tagalog',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Thai (laotian)',
        	'value' => 'Thai (laotian)',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Turkish',
        	'value' => 'Turkish',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Ukrainian',
        	'value' => 'Ukrainian',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Vietnamese',
        	'value' => 'Vietnamese',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Yiddish',
        	'value' => 'Yiddish',
        	'form_list_id' => '4'
        ] );
        Option::create( [
        	'name' => 'Anesthesiology',
        	'value' => 'Anesthesiology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Colorectal Surgery',
        	'value' => 'Colorectal Surgery',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Cardiology',
        	'value' => 'Cardiology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Dentistry',
        	'value' => 'Dentistry',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Dermatology',
        	'value' => 'Dermatology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Ear Nose & Throat',
        	'value' => 'Ear Nose & Throat',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Emergency',
        	'value' => 'Emergency',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Endocrinology',
        	'value' => 'Endocrinology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Gastroenterology',
        	'value' => 'Gastroenterology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'General Surgery',
        	'value' => 'General Surgery',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Gerontology',
        	'value' => 'Gerontology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Gynecology Oncology',
        	'value' => 'Gynecology Oncology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Infectious Disease',
        	'value' => 'Infectious Disease',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Internal Medicine',
        	'value' => 'Internal Medicine',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Medical Laboratory',
        	'value' => 'Medical Laboratory',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Obstetrics & Gynecology',
        	'value' => 'Obstetrics & Gynecology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Oncology',
        	'value' => 'Oncology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Ophthalmology',
        	'value' => 'Ophthalmology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Oral Surgery',
        	'value' => 'Oral Surgery',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Orthodontia',
        	'value' => 'Orthodontia',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Orthopedics',
        	'value' => 'Orthopedics',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Pediatrics',
        	'value' => 'Pediatrics',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Pharmacy',
        	'value' => 'Pharmacy',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Physical Therapy / Occupational Therapy',
        	'value' => 'Physical Therapy / Occupational Therapy',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Plastic Surgery',
        	'value' => 'Plastic Surgery',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Podiatry',
        	'value' => 'Podiatry',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Primary care',
        	'value' => 'Primary care',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Psychiatry',
        	'value' => 'Psychiatry',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Public Health',
        	'value' => 'Public Health',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Pulmonary',
        	'value' => 'Pulmonary',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Radiology',
        	'value' => 'Radiology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Urogynecology',
        	'value' => 'Urogynecology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
        	'name' => 'Urology',
        	'value' => 'Urology',
        	'form_list_id' => '10'
        ] );
        Option::create( [
          'name' => '--',
          'value' => '',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'AL',
          'value' => 'AL',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'AK',
          'value' => 'AK',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'AS',
          'value' => 'AS',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'AZ',
          'value' => 'AZ',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'AR',
          'value' => 'AR',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'CA',
          'value' => 'CA',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'CO',
          'value' => 'CO',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'CT',
          'value' => 'CT',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'DE',
          'value' => 'DE',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'DC',
          'value' => 'DC',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'FM',
          'value' => 'FM',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'FL',
          'value' => 'FL',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'GA',
          'value' => 'GA',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'GU',
          'value' => 'GU',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'HI',
          'value' => 'HI',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'ID',
          'value' => 'ID',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'IL',
          'value' => 'IL',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'IN',
          'value' => 'IN',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'IA',
          'value' => 'IA',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'KS',
          'value' => 'KS',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'KY',
          'value' => 'KY',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'LA',
          'value' => 'LA',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'ME',
          'value' => 'ME',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'MH',
          'value' => 'MH',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'MD',
          'value' => 'MD',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'MA',
          'value' => 'MA',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'MI',
          'value' => 'MI',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'MN',
          'value' => 'MN',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'MS',
          'value' => 'MS',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'MO',
          'value' => 'MO',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'MT',
          'value' => 'MT',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'NE',
          'value' => 'NE',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'NV',
          'value' => 'NV',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'NH',
          'value' => 'NH',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'NJ',
          'value' => 'NJ',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'NM',
          'value' => 'NM',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'NY',
          'value' => 'NY',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'NC',
          'value' => 'NC',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'ND',
          'value' => 'ND',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'MP',
          'value' => 'MP',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'OH',
          'value' => 'OH',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'OK',
          'value' => 'OK',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'OR',
          'value' => 'OR',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'PW',
          'value' => 'PW',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'PA',
          'value' => 'PA',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'PR',
          'value' => 'PR',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'RI',
          'value' => 'RI',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'SC',
          'value' => 'SC',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'SD',
          'value' => 'SD',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'TN',
          'value' => 'TN',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'TX',
          'value' => 'TX',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'UT',
          'value' => 'UT',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'VT',
          'value' => 'VT',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'VI',
          'value' => 'VI',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'VA',
          'value' => 'VA',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'WA',
          'value' => 'WA',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'WV',
          'value' => 'WV',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'WI',
          'value' => 'WI',
          'form_list_id' => '7'
        ] );
        Option::create( [
          'name' => 'WY',
          'value' => 'WY',
          'form_list_id' => '7'
        ] );







    }
}
