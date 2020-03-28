class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :units
  belongs_to :restaurant

	has_one :category, through: :item_category
	has_many :trackable_attributes, through: :category_attributes
	has_many :records, through: :item_record

	def records
		object.records.todays_records
	end



end
