import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
public class App {
    public static void main(String[] args) {
        String jdbcUrl = "jdbc:postgresql://localhost:5432/opennms";
        String username = "opennms";
        String password = "opennms";

        try (Connection conn = DriverManager.getConnection(jdbcUrl, username, password)) {
            String query = "SELECT nodeid FROM node WHERE nodelabel = ?";
            PreparedStatement pstmt = conn.prepareStatement(query);
            pstmt.setString(1, "OLT11");
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                int nodeId = rs.getInt("nodeid");
                System.out.println("Node ID: " + nodeId);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

