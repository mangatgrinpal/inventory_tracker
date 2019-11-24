class RecordSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :record_type, :date

  belongs_to :item
end
