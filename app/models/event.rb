class Event < ActiveRecord::Base

  validates :date, :title, :organizer_name, :organizer_email, :presence => true 
  validates :title, :uniqueness => true
  validate :organizer_email_must_be_valid
  validate :date_cannot_be_in_past
  # validate :date_must_be_valid

  def date_cannot_be_in_past
    return false if date.blank?
    if date < Date.today
      errors.add(:date, "cannot be in the past")
    end
  end

  def organizer_email_must_be_valid
    
    unless organizer_email =~ /^.+@.+$/
      errors.add(:email, "not valid email address")
    end
  end

  # def date_must_be_valid
  #   unless date =~ /^(\d){2}\/?(\d){2}\/?(\d){4}$/
  #     errors.add(:date, "not valid format")
  #   end
  # end

end
