package entities;

import java.util.List;

public class Course {

    private Long id;
    private String title;
    private List<Lesson> lessons;

    public Course() {
    }

    public Course(Long id, String title) {
        this.id = id;
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Lesson> getLessons() {
        return lessons;
    }

    public void setLessons(List<Lesson> lessons) {
        this.lessons = lessons;
    }

    /*
    public void setLessons(Lesson item) {
        lessons.add(item);
    }*/

    @Override
    public String toString() {
        return "Course [" +
                "id=" + id +
                ", title='" + title +
                ']';
    }
}
