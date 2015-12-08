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
        	'name' => '0-23mos',
        	'value' => '0-23mos',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => '2-4',
        	'value' => '2-4',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => '5-6',
        	'value' => '5-6',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => '7-9',
        	'value' => '7-9',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => '10-12',
        	'value' => '10-12',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Extra small',
        	'value' => 'xsm',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Small',
        	'value' => 'sm',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Medium',
        	'value' => 'med',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Large',
        	'value' => 'lrg',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Extra large',
        	'value' => 'xlrg',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Male',
        	'value' => 'male',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Female',
        	'value' => 'female',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Extra small',
        	'value' => 'xsm',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Small',
        	'value' => 'sm',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Medium',
        	'value' => 'med',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Large',
        	'value' => 'lrg',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Extra large',
        	'value' => 'xlrg',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Advertisement',
        	'value' => 'advertisement',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Email/Newsletter',
        	'value' => 'email-newsletter',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Facebook',
        	'value' => 'facebook',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Family or Friend',
        	'value' => 'family-friend',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Newspaper Story',
        	'value' => 'newspaper',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'TV',
        	'value' => 'tv',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Twitter',
        	'value' => 'twitter',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Website/Search Engine',
        	'value' => 'website-search-engine',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'YouTube',
        	'value' => 'youtube',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Other',
        	'value' => 'other',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Advanced Registered Nurse Practitioner',
        	'value' => 'Advanced Registered Nurse Practitioner',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Audiologist',
        	'value' => 'Audiologist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Certified Counselor',
        	'value' => 'Certified Counselor',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Certified Massage Therapist',
        	'value' => 'Certified Massage Therapist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Certified Midwife',
        	'value' => 'Certified Midwife',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Certified Nurse Midwife',
        	'value' => 'Certified Nurse Midwife',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Certified Nursing Assistant',
        	'value' => 'Certified Nursing Assistant',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Certified Radiologic Technologist',
        	'value' => 'Certified Radiologic Technologist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Certified Registered Nurse Anesthetist',
        	'value' => 'Certified Registered Nurse Anesthetist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Chiropractor',
        	'value' => 'Chiropractor',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Dental Assistant',
        	'value' => 'Dental Assistant',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Dental Hygienist',
        	'value' => 'Dental Hygienist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Dentist',
        	'value' => 'Dentist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Doctor',
        	'value' => 'Doctor',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Drivers License Commercial Class A',
        	'value' => 'Drivers License Commercial Class A',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Drivers License Commercial Class B',
        	'value' => 'Drivers License Commercial Class B',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Drivers License Commercial Class C',
        	'value' => 'Drivers License Commercial Class C',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Emergency Medical Technician',
        	'value' => 'Emergency Medical Technician',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Laboratory Technician',
        	'value' => 'Laboratory Technician',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Licensed Massage Therapist',
        	'value' => 'Licensed Massage Therapist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Licensed Vocational or Practical Nurse',
        	'value' => 'Licensed Vocational or Practical Nurse',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Naturopath',
        	'value' => 'Naturopath',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Occupational Therapist',
        	'value' => 'Occupational Therapist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Ophthalmologist',
        	'value' => 'Ophthalmologist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Optician',
        	'value' => 'Optician',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Optometrist',
        	'value' => 'Optometrist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Osteopath',
        	'value' => 'Osteopath',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Paramedic',
        	'value' => 'Paramedic',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Physical Therapist',
        	'value' => 'Physical Therapist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Physician\'s Assistant',
        	'value' => 'Physician\'s Assistant',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Podiatrist',
        	'value' => 'Podiatrist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Registered Dietitian',
        	'value' => 'Registered Dietitian',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Registered Nurse',
        	'value' => 'Registered Nurse',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Respiratory Therapist',
        	'value' => 'Respiratory Therapist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'ocial Worker',
        	'value' => 'Social Worker',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Speech & Language Pathologist',
        	'value' => 'Speech & Language Pathologist',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Surgical Technician',
        	'value' => 'Surgical Technician',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Ultrasound Technician',
        	'value' => 'Ultrasound Technician',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Other',
        	'value' => 'other',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'High school',
        	'value' => 'highschool',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'College',
        	'value' => 'college',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'University',
        	'value' => 'university',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'AHA',
        	'value' => 'aha',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Red Cross',
        	'value' => 'sm',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Other',
        	'value' => 'other',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Afghanistan',
        	'value' => 'AFG',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Åland Islands',
        	'value' => 'ALA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Albania',
        	'value' => 'ALB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Algeria',
        	'value' => 'DZA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'American Samoa',
        	'value' => 'ASM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Andorra',
        	'value' => 'AND',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Angola',
        	'value' => 'AGO',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Anguilla',
        	'value' => 'AIA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Antarctica',
        	'value' => 'ATA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Antigua and Barbuda',
        	'value' => 'ATG',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Argentina',
        	'value' => 'ARG',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Armenia',
        	'value' => 'ARM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Aruba',
        	'value' => 'ABW',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Australia',
        	'value' => 'AUS',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Austria',
        	'value' => 'AUT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Azerbaijan',
        	'value' => 'AZE',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Bahamas',
        	'value' => 'BHS',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Bahrain',
        	'value' => 'BHR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Bangladesh',
        	'value' => 'BGD',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Barbados',
        	'value' => 'BRB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Belarus',
        	'value' => 'BLR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Belgium',
        	'value' => 'BEL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Belize',
        	'value' => 'BLZ',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Benin',
        	'value' => 'BEN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Bermuda',
        	'value' => 'BMU',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Bhutan',
        	'value' => 'BTN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Bolivia, Plurinational State of',
        	'value' => 'BOL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Bonaire, Sint Eustatius and Saba',
        	'value' => 'BES',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Bosnia and Herzegovina',
        	'value' => 'BIH',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Botswana',
        	'value' => 'BWA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Bouvet Island',
        	'value' => 'BVT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Brazil',
        	'value' => 'BRA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'British Indian Ocean Territory',
        	'value' => 'IOT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Brunei Darussalam',
        	'value' => 'BRN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Bulgaria',
        	'value' => 'BGR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Burkina Faso',
        	'value' => 'BFA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Burundi',
        	'value' => 'BDI',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Cambodia',
        	'value' => 'KHM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Cameroon',
        	'value' => 'CMR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Canada',
        	'value' => 'CAN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Cape Verde',
        	'value' => 'CPV',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Cayman Islands',
        	'value' => 'CYM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Central African Republic',
        	'value' => 'CAF',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Chad',
        	'value' => 'TCD',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Chile',
        	'value' => 'CHL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'China',
        	'value' => 'CHN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Christmas Island',
        	'value' => 'CXR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Cocos (Keeling) Islands',
        	'value' => 'CCK',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Colombia',
        	'value' => 'COL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Comoros',
        	'value' => 'COM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Congo',
        	'value' => 'COG',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Congo, the Democratic Republic of the',
        	'value' => 'COD',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Cook Islands',
        	'value' => 'COK',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Costa Rica',
        	'value' => 'CRI',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Côte d\'Ivoire',
        	'value' => 'CIV',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Croatia',
        	'value' => 'HRV',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Cuba',
        	'value' => 'CUB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Curaçao',
        	'value' => 'CUW',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Cyprus',
        	'value' => 'CYP',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Czech Republic',
        	'value' => 'CZE',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Denmark',
        	'value' => 'DNK',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Djibouti',
        	'value' => 'DJI',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Dominica',
        	'value' => 'DMA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Dominican Republic',
        	'value' => 'DOM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Ecuador',
        	'value' => 'ECU',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Egypt',
        	'value' => 'EGY',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'El Salvador',
        	'value' => 'SLV',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Equatorial Guinea',
        	'value' => 'GNQ',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Eritrea',
        	'value' => 'ERI',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Estonia',
        	'value' => 'EST',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Ethiopia',
        	'value' => 'ETH',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Falkland Islands (Malvinas)',
        	'value' => 'FLK',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Faroe Islands',
        	'value' => 'FRO',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Fiji',
        	'value' => 'FJI',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Finland',
        	'value' => 'FIN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'France',
        	'value' => 'FRA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'French Guiana',
        	'value' => 'GUF',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'French Polynesia',
        	'value' => 'PYF',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'French Southern Territories',
        	'value' => 'ATF',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Gabon',
        	'value' => 'GAB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Gambia',
        	'value' => 'GMB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Georgia',
        	'value' => 'GEO',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Germany',
        	'value' => 'DEU',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Ghana',
        	'value' => 'GHA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Gibraltar',
        	'value' => 'GIB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Greece',
        	'value' => 'GRC',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Greenland',
        	'value' => 'GRL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Grenada',
        	'value' => 'GRD',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Guadeloupe',
        	'value' => 'GLP',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Guam',
        	'value' => 'GUM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Guatemala',
        	'value' => 'GTM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Guernsey',
        	'value' => 'GGY',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Guinea',
        	'value' => 'GIN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Guinea-Bissau',
        	'value' => 'GNB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Guyana',
        	'value' => 'GUY',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Haiti',
        	'value' => 'HTI',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Heard Island and McDonald Islands',
        	'value' => 'HMD',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Holy See (Vatican City State)',
        	'value' => 'VAT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Honduras',
        	'value' => 'HND',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Hong Kong',
        	'value' => 'HKG',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Hungary',
        	'value' => 'HUN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Iceland',
        	'value' => 'ISL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'India',
        	'value' => 'IND',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Indonesia',
        	'value' => 'IDN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Iran, Islamic Republic of',
        	'value' => 'IRN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Iraq',
        	'value' => 'IRQ',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Ireland',
        	'value' => 'IRL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Isle of Man',
        	'value' => 'IMN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Israel',
        	'value' => 'ISR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Italy',
        	'value' => 'ITA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Jamaica',
        	'value' => 'JAM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Japan',
        	'value' => 'JPN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Jersey',
        	'value' => 'JEY',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Jordan',
        	'value' => 'JOR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Kazakhstan',
        	'value' => 'KAZ',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Kenya',
        	'value' => 'KEN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Kiribati',
        	'value' => 'KIR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Korea, Democratic People\'s Republic of',
        	'value' => 'PRK',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Korea, Republic of',
        	'value' => 'KOR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Kuwait',
        	'value' => 'KWT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Kyrgyzstan',
        	'value' => 'KGZ',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Lao People\'s Democratic Republic',
        	'value' => 'LAO',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Latvia',
        	'value' => 'LVA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Lebanon',
        	'value' => 'LBN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Lesotho',
        	'value' => 'LSO',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Liberia',
        	'value' => 'LBR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Libya',
        	'value' => 'LBY',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Liechtenstein',
        	'value' => 'LIE',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Lithuania',
        	'value' => 'LTU',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Luxembourg',
        	'value' => 'LUX',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Macao',
        	'value' => 'MAC',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Macedonia, the former Yugoslav Republic of',
        	'value' => 'MKD',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Madagascar',
        	'value' => 'MDG',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Malawi',
        	'value' => 'MWI',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Malaysia',
        	'value' => 'MYS',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Maldives',
        	'value' => 'MDV',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Mali',
        	'value' => 'MLI',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Malta',
        	'value' => 'MLT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Marshall Islands',
        	'value' => 'MHL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Martinique',
        	'value' => 'MTQ',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Mauritania',
        	'value' => 'MRT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Mauritius',
        	'value' => 'MUS',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Mayotte',
        	'value' => 'MYT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Mexico',
        	'value' => 'MEX',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Micronesia, Federated States of',
        	'value' => 'FSM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Moldova, Republic of',
        	'value' => 'MDA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Monaco',
        	'value' => 'MCO',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Mongolia',
        	'value' => 'MNG',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Montenegro',
        	'value' => 'MNE',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Montserrat',
        	'value' => 'MSR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Morocco',
        	'value' => 'MAR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Mozambique',
        	'value' => 'MOZ',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Myanmar',
        	'value' => 'MMR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Namibia',
        	'value' => 'NAM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Nauru',
        	'value' => 'NRU',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Nepal',
        	'value' => 'NPL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Netherlands',
        	'value' => 'NLD',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'New Caledonia',
        	'value' => 'NCL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'New Zealand',
        	'value' => 'NZL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Nicaragua',
        	'value' => 'NIC',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Niger',
        	'value' => 'NER',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Nigeria',
        	'value' => 'NGA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Niue',
        	'value' => 'NIU',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Norfolk Island',
        	'value' => 'NFK',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Northern Mariana Islands',
        	'value' => 'MNP',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Norway',
        	'value' => 'NOR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Oman',
        	'value' => 'OMN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Pakistan',
        	'value' => 'PAK',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Palau',
        	'value' => 'PLW',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Palestinian Territory, Occupied',
        	'value' => 'PSE',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Panama',
        	'value' => 'PAN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Papua New Guinea',
        	'value' => 'PNG',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Paraguay',
        	'value' => 'PRY',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Peru',
        	'value' => 'PER',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Philippines',
        	'value' => 'PHL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Pitcairn',
        	'value' => 'PCN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Poland',
        	'value' => 'POL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Portugal',
        	'value' => 'PRT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Puerto Rico',
        	'value' => 'PRI',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Qatar',
        	'value' => 'QAT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Réunion',
        	'value' => 'REU',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Romania',
        	'value' => 'ROU',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Russian Federation',
        	'value' => 'RUS',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Rwanda',
        	'value' => 'RWA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Saint Barthélemy',
        	'value' => 'BLM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Saint Helena, Ascension and Tristan da Cunha',
        	'value' => 'SHN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Saint Kitts and Nevis',
        	'value' => 'KNA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Saint Lucia',
        	'value' => 'LCA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Saint Martin (French part)',
        	'value' => 'MAF',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Saint Pierre and Miquelon',
        	'value' => 'SPM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Saint Vincent and the Grenadines',
        	'value' => 'VCT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Samoa',
        	'value' => 'WSM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'San Marino',
        	'value' => 'SMR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Sao Tome and Principe',
        	'value' => 'STP',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Saudi Arabia',
        	'value' => 'SAU',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Senegal',
        	'value' => 'SEN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Serbia',
        	'value' => 'SRB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Seychelles',
        	'value' => 'SYC',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Sierra Leone',
        	'value' => 'SLE',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Singapore',
        	'value' => 'SGP',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Sint Maarten (Dutch part)',
        	'value' => 'SXM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Slovakia',
        	'value' => 'SVK',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Slovenia',
        	'value' => 'SVN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Solomon Islands',
        	'value' => 'SLB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Somalia',
        	'value' => 'SOM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'South Africa',
        	'value' => 'ZAF',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'South Georgia and the South Sandwich Islands',
        	'value' => 'SGS',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'South Sudan',
        	'value' => 'SSD',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Spain',
        	'value' => 'ESP',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Sri Lanka',
        	'value' => 'LKA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Sudan',
        	'value' => 'SDN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Suriname',
        	'value' => 'SUR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Svalbard and Jan Mayen',
        	'value' => 'SJM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Swaziland',
        	'value' => 'SWZ',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Sweden',
        	'value' => 'SWE',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Switzerland',
        	'value' => 'CHE',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Syrian Arab Republic',
        	'value' => 'SYR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Taiwan, Province of China',
        	'value' => 'TWN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Tajikistan',
        	'value' => 'TJK',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Tanzania, United Republic of',
        	'value' => 'TZA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Thailand',
        	'value' => 'THA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Timor-Leste',
        	'value' => 'TLS',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Togo',
        	'value' => 'TGO',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Tokelau',
        	'value' => 'TKL',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Tonga',
        	'value' => 'TON',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Trinidad and Tobago',
        	'value' => 'TTO',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Tunisia',
        	'value' => 'TUN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Turkey',
        	'value' => 'TUR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Turkmenistan',
        	'value' => 'TKM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Turks and Caicos Islands',
        	'value' => 'TCA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Tuvalu',
        	'value' => 'TUV',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Uganda',
        	'value' => 'UGA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Ukraine',
        	'value' => 'UKR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'United Arab Emirates',
        	'value' => 'ARE',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'United Kingdom',
        	'value' => 'GBR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'United States',
        	'value' => 'USA',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'United States Minor Outlying Islands',
        	'value' => 'UMI',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Uruguay',
        	'value' => 'URY',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Uzbekistan',
        	'value' => 'UZB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Vanuatu',
        	'value' => 'VUT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Venezuela, Bolivarian Republic of',
        	'value' => 'VEN',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Viet Nam',
        	'value' => 'VNM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Virgin Islands, British',
        	'value' => 'VGB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Virgin Islands, U.S.',
        	'value' => 'VIR',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Wallis and Futuna',
        	'value' => 'WLF',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Western Sahara',
        	'value' => 'ESH',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Yemen',
        	'value' => 'YEM',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Zambia',
        	'value' => 'ZMB',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Zimbabwe',
        	'value' => 'ZWE',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Full day',
        	'value' => 'full',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Half day',
        	'value' => 'half',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'AM',
        	'value' => 'am',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'PM',
        	'value' => 'pm',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Academy Bus Transportation',
        	'value' => 'Academy Bus Transportation',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Active Manual Relaxation/Hydrotherapy',
        	'value' => 'Active Manual Relaxation/Hydrotherapy',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Audio Visual',
        	'value' => 'Audio Visual',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Audio Visual Food Demonstration',
        	'value' => 'Audio Visual Food Demonstration',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Audiology',
        	'value' => 'Audiology',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Beautician/Barber Service',
        	'value' => 'Beautician/Barber Service',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Central Supply',
        	'value' => 'Central Supply',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Chaplaincy',
        	'value' => 'Chaplaincy',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Children’s Department Adult Volunteer',
        	'value' => 'Children’s Department Adult Volunteer',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Communications-Media',
        	'value' => 'Communications-Media',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Director’s/Assistant Director’s',
        	'value' => 'Director’s/Assistant Director’s',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Exit Management',
        	'value' => 'Exit Management',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Eye Care',
        	'value' => 'Eye Care',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Food Demonstration',
        	'value' => 'Food Demonstration',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Food Services',
        	'value' => 'Food Services',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Hospitality',
        	'value' => 'Hospitality',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Hospitality Decorations',
        	'value' => 'Hospitality Decorations',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Hospitality-Tour Guide',
        	'value' => 'Hospitality-Tour Guide',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Interpretation',
        	'value' => 'Interpretation',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Lab',
        	'value' => 'Lab',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Lifestyle',
        	'value' => 'Lifestyle',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Mental Health',
        	'value' => 'Mental Health',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Music Therapy',
        	'value' => 'Music Therapy',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Pediatrics',
        	'value' => 'Pediatrics',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Pharmacy',
        	'value' => 'Pharmacy',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Plant Services',
        	'value' => 'Plant Services',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Podiatry',
        	'value' => 'Podiatry',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Primary Care',
        	'value' => 'Primary Care',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Program Committee',
        	'value' => 'Program Committee',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'PT/OT',
        	'value' => 'PT/OT',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Radiology',
        	'value' => 'Radiology',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Registration',
        	'value' => 'Registration',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Respiratory Therapy',
        	'value' => 'Respiratory Therapy',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Security',
        	'value' => 'Security',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Surgery',
        	'value' => 'Surgery',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Triage',
        	'value' => 'Triage',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Volunteer Registration',
        	'value' => 'Volunteer Registration',
        	'form_list_id' => ''
        ] );
        Option::create( [
        	'name' => 'Women’s Health',
        	'value' => 'Women’s Health',
        	'form_list_id' => ''
        ] );



    }
}

?>
