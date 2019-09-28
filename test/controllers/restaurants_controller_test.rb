require 'test_helper'

class RestaurantsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get restaurants_create_url
    assert_response :success
  end

  test "should get destroy" do
    get restaurants_destroy_url
    assert_response :success
  end

end
