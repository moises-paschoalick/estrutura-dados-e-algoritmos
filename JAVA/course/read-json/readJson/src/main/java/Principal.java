import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import entities.Course;
import entities.Lesson;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class Principal {

    public static void main(String[] args) {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());

        try {
            File jsonFile = new File("/home/moises/Desktop/DEV/algoritmo/COURSE/JAVA/course/read-json/readJson/src/main/resources/file.json");
            List<Course> courses = objectMapper.readValue(jsonFile, new TypeReference<List<Course>>() {} );

            for (Course course: courses) {
                System.out.println("Course Id " + course.getId());
                System.out.println("Course Title " + course.getTitle());

                List<Lesson> lessons = course.getLessons();

                for (Lesson lesson: lessons) {
                    System.out.println("\t--------------------------------");
                    System.out.println("\tid: " + lesson.getId());
                    System.out.println("\ttitle: " + lesson.getTitle());
                    System.out.println("\tmedia: " + lesson.getMedia());
                    System.out.println("\ttimestamp: " + lesson.getTimestamp());
                }
                System.out.println("\t--------------------------------");
            }


        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
