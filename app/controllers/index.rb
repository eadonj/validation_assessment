get '/' do
  @events = Event.all
  erb :index
end

get '/events/:id/show' do |id|
  @event = Event.find(id)
  erb :event_show
end

get '/events/new' do
  erb :create_event  
end

post '/events/create' do
  content_type :json
  p "params: #{params}"
  event = Event.new(params[:event])
  event.save if event.valid?
  @errs = event.errors.full_messages.to_json
end
