export class VolunteerViewModel {
    public Id: number = 0;
    public FirstName: string = "";
    public LastName: string = "";
    public ParentFirstName: string = "";
    public ParentLastName: string = "";
    public Email: string = "";
    public Phone: string = "";
    public BirthDate: Date = new Date();
    public EduationalLevel: string = "";
    public SchoolName: string = "";
    public EmergencyContactName: string = "";
    public EmergencyContactNumber: string = "";
    public EmergencyRelashionship: string = "";
    public WhyDoUWantToBeAVolunteer: string = "";
    public VolunteerExperiences: string = "";
    public InterestsAndSkills: string = "";
    public IsValid: boolean = false;
}