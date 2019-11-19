class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :items
end
