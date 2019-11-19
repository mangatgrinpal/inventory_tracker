class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :units

  belongs_to :restaurant
  has_many :records
end
