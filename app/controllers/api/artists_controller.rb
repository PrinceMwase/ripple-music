class Api::ArtistsController < ApplicationController

  before_action :underscore_params!

  def index
    @artists = Artist.all
    # @artists = Artist.with_attached_photo.all
    render :index
  end

  def show
    @artist = Artist.find_by(id: params[:id])
    # @artist = Artist.with_attached_photo.find_by(id: params[:id])
    if @artist
      render :show
    else
      render json: ['Artist does not exist.'], status: 404
    end
  end

  def artist_params
    params.require(:artist).permit(:artist_name, :bio, :photo)
  end
end