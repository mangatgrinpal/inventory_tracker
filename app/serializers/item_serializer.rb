class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :units

  belongs_to :restaurant
end
