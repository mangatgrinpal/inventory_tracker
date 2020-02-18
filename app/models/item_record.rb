class ItemRecord < ApplicationRecord
	belongs_to :item
	belongs_to :record
end
