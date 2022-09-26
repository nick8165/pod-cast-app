class UserPodCastsController < ApplicationController
    before_action :authorized 

    def user_pod_id_show
        user_pod = UserPodCast.where(user_id: params[:user_id])
        render json: user_pod, include: [:pod_cast]
    end

    def create
        user_pod = UserPodCast.create(user_pod_params)
        render json: user_pod, status: :created
    end

    def destroy
        user_pod = UserPodCast.where(user_id: params[:user_id], pod_cast_id: params[:pod_cast_id])
        if user_pod
            user_pod.destroy_all
            head :no_content
        else
            render json: {error: "pod cast not found"}, status: :not_found
        end
    end

    private

    def user_pod_params
        params.permit(:user_id, :pod_cast_id)
    end
end