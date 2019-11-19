class RecordSerializer < ActiveModel::Serializer
  attributes :id, :quantity

  belongs_to :item
end
