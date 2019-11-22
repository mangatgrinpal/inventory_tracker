class RecordSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :type, :date

  belongs_to :item
end
