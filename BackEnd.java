import java.util.ArrayList;
import java.util.List;

class Member {
    private String name;

    public Member(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

public class BackEnd {
    private static List<Member> members = new ArrayList<>();
    private static String adminUsername = "admin";
    private static String adminPassword = "admin";
    private static boolean adminLoggedIn = false;

    public static boolean loginAdmin(String username, String password) {
        if (username.equals(adminUsername) && password.equals(adminPassword)) {
            adminLoggedIn = true;
            return true;
        }
        return false;
    }

    public static boolean isAdminLoggedIn() {
        return adminLoggedIn;
    }

    public static List<Member> getAllMembers() {
        return members;
    }

    public static void addMember(String name) {
        members.add(new Member(name));
    }

    public static boolean removeMember(String name) {
        for (Member member : members) {
            if (member.getName().equals(name)) {
                members.remove(member);
                return true;
            }
        }
        return false;
    }
}