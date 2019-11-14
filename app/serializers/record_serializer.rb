class RecordSerializer
  include FastJsonapi::ObjectSerializer
  attributes :week_dates, :quantity

  belongs_to :item
end
