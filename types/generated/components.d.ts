import type { Schema, Attribute } from '@strapi/strapi';

export interface GuestHouseInfoContactDetails extends Schema.Component {
  collectionName: 'components_guest_house_info_contact_details';
  info: {
    displayName: 'contact_details';
    description: '';
  };
  attributes: {
    phone_numbers: Attribute.String & Attribute.Required;
    email_address: Attribute.Email & Attribute.Required;
    location_description: Attribute.RichText;
    location: Attribute.Component<'guest-house-info.location'>;
  };
}

export interface GuestHouseInfoLocation extends Schema.Component {
  collectionName: 'components_guest_house_info_locations';
  info: {
    displayName: 'location';
    description: '';
  };
  attributes: {
    city: Attribute.String;
    province: Attribute.Enumeration<
      [
        'Gauteng',
        'Limpopo',
        'Eastern Cape',
        'Western Cape',
        'Free state',
        'Mpumalanga',
        'North West',
        'Kwa Zulu Natal',
        'Northern Cape'
      ]
    >;
    town: Attribute.String;
    village: Attribute.String;
    zip_code: Attribute.String;
  };
}

export interface GuestHouseInfoOffers extends Schema.Component {
  collectionName: 'components_guest_house_info_offers';
  info: {
    displayName: 'offers';
    description: '';
  };
  attributes: {
    wifi: Attribute.Boolean & Attribute.DefaultTo<false>;
    free_parking: Attribute.Boolean & Attribute.DefaultTo<false>;
    Pool: Attribute.Boolean & Attribute.DefaultTo<false>;
    toilet: Attribute.Boolean & Attribute.DefaultTo<false>;
    Food: Attribute.Boolean & Attribute.DefaultTo<false>;
    fridge: Attribute.Boolean & Attribute.DefaultTo<false>;
    beverages: Attribute.Boolean & Attribute.DefaultTo<false>;
    braai_place: Attribute.Boolean & Attribute.DefaultTo<false>;
    shower: Attribute.Boolean & Attribute.DefaultTo<false>;
    bathtub: Attribute.Boolean & Attribute.DefaultTo<false>;
    pillows_blankets: Attribute.Boolean & Attribute.DefaultTo<false>;
    chill_place: Attribute.Boolean & Attribute.DefaultTo<false>;
    double_bed: Attribute.Boolean & Attribute.DefaultTo<false>;
    single_bed: Attribute.Boolean & Attribute.DefaultTo<false>;
    balcony: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface UserInfoUser extends Schema.Component {
  collectionName: 'components_user_info_users';
  info: {
    displayName: 'User';
    description: '';
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    identityNumber: Attribute.String &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 13;
        maxLength: 13;
      }>;
    dp: Attribute.Media;
    phoneNumber: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'guest-house-info.contact-details': GuestHouseInfoContactDetails;
      'guest-house-info.location': GuestHouseInfoLocation;
      'guest-house-info.offers': GuestHouseInfoOffers;
      'user-info.user': UserInfoUser;
    }
  }
}
