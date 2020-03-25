class RecordSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :trackable_attribute

  has_one :item, through: :item_record
  has_one :trackable_attribute, through: :record_trackable_attribute
end
