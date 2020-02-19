class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :units
  belongs_to :restaurant

	has_one :category, through: :item_category
	has_many :trackable_attributes, through: :category
  has_many :records, through: :item_records
end
