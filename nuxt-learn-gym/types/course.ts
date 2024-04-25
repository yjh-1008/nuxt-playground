export interface Course {
  title: string;
  subtitle: string;
  courseSlug: string;
  content: string;
  thumbnail: string;
  video: string;
  rating: number;
  reviewsCount: number;
  studentCount: number;
  reviewsUrl: string;
  inflearnUrl: string;
  gymcodingUrl: string;
}

// type NewType = Omit<Course, 'rating' | 'reviewsCount' | 'studentCount'>;

export interface CourseWithPath
  extends Omit<Course, 'rating' | 'reviewsCount' | 'studentCount'> {
  rating: number | string;
  reviewsCount: string;
  studentCount: string;
  path: string;
}
