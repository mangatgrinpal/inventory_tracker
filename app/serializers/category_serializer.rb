class CategorySerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :items
  has_many :trackable_attributes, through: :category_attribute
end
