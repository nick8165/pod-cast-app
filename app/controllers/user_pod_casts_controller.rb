class UserPodCastsController < ApplicationController
    before_action :authorized 

    def create
        user_pod = UserPodCast.create(user_pod_params)
        render json: user_pod, status: :created
    end

    private

    def user_pod_params
        params.permit(:user_id, :pod_cast_id)
    end
end