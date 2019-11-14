class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :units

  belongs_to :restaurant
  has_many :records
end
